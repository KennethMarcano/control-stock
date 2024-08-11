import styled from "styled-components";

export const ContainerProductsTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-x: auto;

    table {
        border-collapse: collapse;
        table-layout: auto;
        min-width: 60vw;
        max-width: 90vw;
    }
    th, td {  
            border: 0.1rem solid #ccc;  
            padding: 0.8rem;  
            text-align: left;
        } 

    th {  
            background-color: #f4f4f4;  
        }

    .price-stock {
        width: 10rem;
    }

    .name {
        width: 25rem;
    }

    .edit-delete {
        display: flex;
        gap: 1rem;
        border: none;
    }

    .ferts {
        width: 10rem;
    }
`;