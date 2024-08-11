import styled from "styled-components";
//import * as colors from '../../config/colors';

export const ContainerProduto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 2rem 3rem;
    background: #fff;

    h1 {
        padding-bottom: 1.5rem;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding-bottom: 2rem;
    }

    input {
            min-width: 40vw;
        }
`;