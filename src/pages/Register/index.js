import React, { useState } from "react";
import { toast } from "react-toastify";
import validator from "validator";
import { useDispatch } from "react-redux";

import * as actions from '../../store/modules/auth/actions'
import { Container } from "../../styles/GlobalStyles";
import { ContainerRegister } from "./styled";


export default function Register() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [taxNumber, setTaxNumber] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        toast.dismiss();
        let errorForm = false;
        if (name.length < 1) {
            errorForm = true;
            toast.error('Campo nome não pode estar vazio');
        }
        if(taxNumber.length < 11) {
            errorForm = true;
            toast.error('O campo CPF precisa ter pelo menos 11 digitos')
        }
        if(!(/^\d+$/.test(taxNumber))) {
            errorForm = true;
            toast.error('O campo CPF precisa ser só numeros')
        }
        if (!validator.isEmail(mail)) {
            errorForm = true;
            toast.error('E-mail invalido');
        }

        if (phone.length < 10) {
            errorForm = true;
            toast.error('Campo phone deve ter pelo menos 10 digitos');
        }
        if (password.length < 6) {
            errorForm = true;
            toast.error('Senha deve ter pelo menos 6 caracteres');
        }

        if (errorForm) return;

        dispatch(actions.registerRequest({ name, taxNumber, mail, phone, password }))
    }

    return (
        <Container>
            <ContainerRegister>
                <h1>Crie sua conta</h1>
                <form onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input
                        type="text"
                        value={name}
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                    >
                    </input>

                    <label>CPF</label>
                    <input
                        type="text"
                        value={taxNumber}
                        placeholder="CPF"
                        onChange={(e) => setTaxNumber(e.target.value)}
                    >
                    </input>

                    <label>Email</label>
                    <input
                        type="email"
                        value={mail}
                        placeholder="E-mail"
                        onChange={(e) => setMail(e.target.value)}
                    >
                    </input>

                    <label>Celular</label>
                    <input
                        type="text"
                        value={phone}
                        placeholder="Celular"
                        onChange={(e) => setPhone(e.target.value)}
                    >
                    </input>

                    <label>Senha</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>



                    <button type="submit">Cadastrar</button>
                </form>
            </ContainerRegister>
        </Container>
    );
}