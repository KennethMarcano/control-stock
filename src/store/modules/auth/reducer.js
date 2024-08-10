import * as types from '../types'
import axios from '../../../services/axios'

const initialState = {
    isLoggedIn: false,
    token: '',
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST: {
            const newState = {...state}
            return newState;
        }

        case types.LOGIN_FAILURE: {
            const newState = { ...initialState };
            delete axios.defaults.headers.Authorization
            return newState;
        }

        case types.LOGIN_SUCESS: {
            const newState = {
                isLoggedIn: true,
                token: action.payload.token,
            }
            return newState;
        }

        case types.REGISTER_REQUEST: {
            const newState = {...state}
            return newState;
        }

        case types.REGISTER_FAILURE: {
            const newState = {...state}
            return newState;
        }

        case types.REGISTER_SUCESS: {
            const newState = {...state}
            return newState;
        }

        default:
            { return state; }

    }
};