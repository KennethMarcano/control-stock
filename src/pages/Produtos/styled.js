import styled from 'styled-components';

export const ContainerProdutos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 20px 30px;
    background: #fff;

    .responsive-table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-x: auto;
    overflow-y: auto;
    max-width: 90%;
    max-height: 70vh;
    }

    h1 {
        padding-bottom: 15px;
    }

    table {
        white-space: nowrap;
        min-width: 70vw;
        max-width: 90vw;
            border-collapse: collapse;  
        }

    th, td {  
            border: 1px solid #ccc;  
            padding: 8px;  
            text-align: left;  
        } 

    th {  
            background-color: #f4f4f4;  
        }

    .price-stock {
        width: 100px;
    }

    .name {
        width: 300px;
    }

    .edit-delete {
        display: flex;
        gap: 15px;
        border: none;
    }

    .ferts {
        width: 100px;
    }

    .button-cadastrar{
        padding-top: 20px;
    }
`;