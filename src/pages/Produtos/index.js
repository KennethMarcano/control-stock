import React, { useEffect } from "react";
import { get } from "lodash";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import axios from "../../services/axios";
import { ContainerProdutos } from "./styled";
import { useGet } from "../../hooks/useGet";
import ProductsTable from "../../components/ProductsTable";
import { useLocation } from "react-router-dom";

export default function Produtos() {
    const { produtos, setProdutos, getProdutos } = useGet();
    const location = useLocation();
    const { message } = location.state || {};

    useEffect(() => {
        toast.loading('Carregando...', { position: 'top-center' })
        try {
            getProdutos()
            toast.dismiss();
        } catch (error) {
            toast.dismiss();
            const errors = get(error, 'response.data.message', []);
            errors.map(error => toast.error(error));
        }
        if (message) {
            toast.success(message);
        }
        // eslint-disable-next-line
    }, [])

    async function handleDelete(e, index, id, name) {
        e.preventDefault();
        const result = await Swal.fire({
            title: `Apagar o produto ${name}?`,
            text: "Não vai conseguir reverte",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim",
        })
        if (result.isConfirmed) {
            try {
                toast.loading('Carregando...', { position: 'top-center' });
                await axios.delete(`/api/products/delete-product/${id}`);
                toast.dismiss();
                toast.success('Produto apagado com sucesso');
                const newProdutos = [...produtos]
                newProdutos.splice(index, 1)
                setProdutos(newProdutos);
            } catch (error) {
                toast.dismiss();
                const errors = get(error, 'response.data.message', []);
                errors.map(error => toast.error(error));
            }
        }

    }

    return (
        <ContainerProdutos>
            <h1>Produtos Cadastrados</h1>
            <ProductsTable
                produtos={produtos}
                handleDelete={handleDelete}
            />
        </ContainerProdutos>
    )
}