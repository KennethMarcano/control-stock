import styled from "styled-components";

export const ContainerProductsTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: auto;
    margin-bottom: 5rem;
    width: 80%;

    input{
        width: 35rem;
    }
    table {
        white-space: nowrap;
        border-collapse: collapse;
        table-layout: auto;
    }
    th, td {  
            border: 0.1rem solid #ccc;  
            padding: 0.8rem;  
            text-align: left;
        } 

    th {  
            background-color: #f4f4f4;  
        }

    .ferts {
        width: 10rem;
    }

    .price-stock {
        width: 10rem;
    }

    .name {
        width: 22rem;
    }

    .description {
        width: 50rem;
    }

    .edit-delete {
        display: flex;
        gap: 1rem;
        border: none;
    }
`;