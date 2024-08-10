import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { get } from "lodash";
import { toast } from "react-toastify";

import { ContainerLogin } from '../Login/styled';
import { Container } from "../../styles/GlobalStyles";
import * as actions from '../../store/modules/auth/actions'

export default function Login(props) {
    const dispatch = useDispatch();
    const prevPath = get(props, 'location.state.prevPath', '/');  

    const [taxNumber, setTaxNumber] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        let errorForm = false;
        if(taxNumber < 11)
        {
            errorForm = true;
            toast.error('O campo taxNumber senha precisa ter pelo menos 11 caracteres')
        }
        if(password.length < 6) {
            errorForm = true;
            toast.error('O campo senha precisa ter pelo menos 6 caracteres')
        }

        if(errorForm) return;

        dispatch(actions.loginRequest({taxNumber, password, prevPath}));
    }

    return (
        <Container>
            <ContainerLogin>
                <h1>Entrar</h1>
                <form onSubmit={handleSubmit}>
                    
                    <input 
                    type="text" 
                    value={taxNumber} 
                    placeholder="CPF ou CNPJ"
                    onChange={(e) => setTaxNumber(e.target.value)}
                    >
                    </input>

    
                    <input 
                    type="password" 
                    value={password} 
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}>
                    </input>

                    <button type="submit">Entrar</button>
                </form>
            </ContainerLogin>
        </Container>);
}