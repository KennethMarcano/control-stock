import styled from "styled-components";
//import * as colors from '../../config/colors';
export const ContainerProduto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 20px 30px;
    background: #fff;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            min-width: 20vw;
        }

        button {
            margin-top: 10px;
        }
    }
`;