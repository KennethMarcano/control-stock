import { call, put, all, takeLatest  } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';


import * as actions from './actions';
import * as types from '../types';
import history from '../../../services/history';
import axios from '../../../services/axios'

function* loginRequest({ payload }) {
    try {
        const { taxNumber, password } = payload;
        toast.loading('Carregando...', {position: 'top-center'})
        const response = yield call(axios.post, '/api/auth/login', { taxNumber, password });

        yield put(actions.loginSucess({ ...response.data.data }))

        toast.dismiss();
        toast.success('Login feito com sucesso');

        axios.defaults.headers.Authorization = `Bearer ${response.data.data.token}`;

        history.push('/home')

    } catch (e) {
        toast.dismiss();
        toast.error('Usuario ou senha invalidos.');
        yield put(actions.loginFailure());

    }
}

function* registerRequest({ payload }) {
    const { name, taxNumber, mail, phone, password } = payload;
    toast.loading('Carregando...', {position: 'top-center'})
    try {
            yield call(axios.post, '/api/auth/register', { 
                name, 
                taxNumber, 
                mail, 
                phone, 
                password,
            });
            toast.dismiss();
            toast.success('Usuario cadastrado com sucesso');
            yield put(actions.loginFailure());
            history.push('/');

    } catch (e) {
        const errors = get(e, 'response.data.message', []);
        const status = get(e, 'response.data.statusCode', 0);
        toast.dismiss();
        yield put(actions.registerFailure());
        if(status === 400){
            errors.map(error => toast.error(error));
        }  
        toast.error(errors)
    }

}

function persistRehydrate({ payload }) {
    const token = get(payload, 'auth.token', '');
    if(!token) return;
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    history.push('/produtos');
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
    takeLatest(types.REGISTER_REQUEST, registerRequest),
]);