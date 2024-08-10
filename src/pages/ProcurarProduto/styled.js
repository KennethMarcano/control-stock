import styled from "styled-components";
import * as colors from '../../config/colors';

export const ContainerProduto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 20px 30px;
    background: #fff;

    h1 {
        padding-bottom: 15px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    input {
            min-width: 40vw;
            padding: 8px 0;
            text-align: center;
            border: 1px solid #bebebe;
            font-size: 15px;
            &:focus{
                border: 2px solid ${colors.primaryColor};
            }
        }
`;