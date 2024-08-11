import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: sans-serif;
        background: #fff;
    }

    html, body, #root {
        height: 100%;
    }

    h1 {
        font-size: 2.5rem;
    }
    
    label {
        font-size: 1.25rem;
    }

    button {
        cursor: pointer;
        background: ${colors.primaryColor};
        color: #fff;
        border: none;
        border-radius: 0.3rem;
        font-weight: 600;
        padding: 1rem;
    }

    a {
        text-decoration: none;
        color: ${colors.primaryColor};
    }

    ul {
        list-style: none;
    }

    input {
        margin: 1.5rem 0;
        padding: 0.8rem 0;
        text-align: center;
        border: 0.1rem solid #bebebe;
        border-radius: 0.5rem;
        font-size: 1.5rem;
        &:focus{
            border: 0.2rem solid ${colors.primaryColor};
        }
    }


`;

export const Container = styled.section`
    width: 40rem;
    margin: 5rem auto;
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
    padding: 3rem 0;
`