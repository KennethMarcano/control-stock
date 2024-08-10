import styled from "styled-components";
import * as colors from '../../config/colors';
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
            margin: 15px 0;
            padding: 8px 0;
            text-align: center;
            border: 1px solid #bebebe;
            border-radius: 5px;
            font-size: 15px;
            &:focus{
                border: 2px solid ${colors.primaryColor};
            }
        }

        button {
            margin-top: 10px;
        }
    }
`;