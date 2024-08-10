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

    body {
        font-family: sans-serif;
        background: ${colors.primaryDarkColor};
    }

    html, body, #root {
        height: 100%;
    }

    h1 {
        font-size: 25px;
    }
    
    label {
        font-size: 12.5px;
    }
    button {
        cursor: pointer;
        max-width: 100px;
        background: ${colors.primaryColor};
        color: #fff;
        border: none;
        border-radius: 3px;
        font-weight: 600;
        padding: 10px;
    }

    a {
        text-decoration: none;
        color: ${colors.primaryColor};
    }

    ul {
        list-style: none;
    }


`;

export const Container = styled.section `
   max-width: 70vw;
    margin: 40px auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`