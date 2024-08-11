import styled from "styled-components";
//import * as colors from '../../config/colors';
export const ContainerProduto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px;
    background: #fff;

    form {
        padding-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        input {
            min-width: 20vw;
        }

        button {
            margin-top: 10px;
        }
    }
`;