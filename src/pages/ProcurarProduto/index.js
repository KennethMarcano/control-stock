import React, { useEffect, useState } from "react";
import { get } from "lodash";
import { toast } from "react-toastify";

import { ContainerProduto } from "./styled";
import { useGet } from "../../hooks/useGet";
import history from "../../services/history";
import axios from "../../services/axios";
import ProductsTable from "../../components/ProductsTable";

export default function ProcurarProduto() {
    const { produtos, produto, setProduto, getProdutos } = useGet()
    const [nameProduto, setNameProduto] = useState('');

    useEffect(() => {
        toast.loading('Carregando...', { position: 'top-center' })
        try {
            getProdutos();
            toast.dismiss();
        } catch (error) {
            toast.dismiss();
            const errors = get(error, 'response.data.message', []);
            errors.map(error => toast.error(error));
        }
        // eslint-disable-next-line
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        let errorForm = false;
        if (nameProduto.length < 1) {
            errorForm = true;
            toast.error('Produto não especificado')
        }
        if (errorForm) return;
        const produtoExistente = produtos.filter(produto => produto.name === nameProduto)
        if (produtoExistente.length < 1) {
            toast.warn(`Não tem o producto: ${nameProduto} no stock`)
        }
        setProduto(produtoExistente);
    }

    async function handleDelete(e, index, id, name) {
        e.preventDefault();
        let deleteConfirm = true;
        if (deleteConfirm) {
            try {
                toast.loading('Carregando...', { position: 'top-center' });
                await axios.delete(`/api/products/delete-product/${id}`);
                toast.dismiss();
                history.push('/produtos', { message: 'Produto apagado com sucesso' });
            } catch (error) {
                toast.dismiss();
                const errors = get(error, 'response.data.message', []);
                errors.map(error => toast.error(error));
            }
        }
    }

    return (
        <ContainerProduto>
            <h1>Procurar produto</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nameProduto}
                    placeholder="Nome do produto"
                    onChange={(e) => setNameProduto(e.target.value)}
                >
                </input>
                <button type="submit">Procurar</button>
            </form>
            {
                produto.length > 0 ?
                    <ProductsTable
                        produtos={produto}
                        handleDelete={handleDelete}
                    />
                    :
                    <></>
            }
        </ContainerProduto>
    );
}