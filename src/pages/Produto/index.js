import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get } from "lodash";
import { toast } from "react-toastify";

import * as actions from '../../store/modules/auth/actions'
import axios from "../../services/axios";
import history from "../../services/history";
import { ContainerProduto } from "./styled";
import { useGet } from "../../hooks/useGet";



export default function Produto({ match }) {
    const { id } = match.params;
    const dispatch = useDispatch();
    const { produtos ,produto ,setProduto, getProduto, getProdutos } = useGet();

    useEffect(() => {
        toast.loading('Carregando...', { position: 'top-center' })
        if (!id) {
            try {
                getProdutos()
                toast.dismiss();
            }
            catch (e) {
                toast.dismiss();
                const errors = get(e, 'response.data.errors', []);
                const status = get(e, 'response.status', 0);
                if (errors.length > 0)
                    errors.map(error => toast.error(error));
                else
                    toast.error('Erro desconhecido')
    
                if (status === 401) dispatch(actions.loginFailure())
                history.push('/produtos');
            }
            return;
        }
        try {
            getProduto(id)
            toast.dismiss();
        }
        catch (e) {
            toast.dismiss();
            const errors = get(e, 'response.data.errors', []);
            const status = get(e, 'response.status', 0);
            if (errors.length > 0)
                errors.map(error => toast.error(error));
            else
                toast.error('Erro desconhecido')

            if (status === 401) dispatch(actions.loginFailure())
            history.push('/produtos');
        }
        // eslint-disable-next-line
    }, [id])

    async function postPatch(type, URL, message) {
        try {
            toast.loading('Carregando...', { position: 'top-center' });
            await axios[type](URL, produto);
            toast.dismiss();
            history.push('/produtos', { message });
        } catch (error) {
            toast.dismiss();
            const errors = get(error, 'response.data.message', []);
            errors.map(error => toast.error(error));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        let errorForm = false;
        if (produto.name.length < 1) {
            errorForm = true;
            toast.error('O Nome do produto não pode estar vazio');
        }
        if (!(produto.price > 0)) {
            errorForm = true;
            toast.error('O preço do producto precisa ser um numero positivo');
        }
        if (!(produto.stock > 0)) {
            errorForm = true;
            toast.error('O stock do producto precisa ser um numero positivo');
        }
        if (errorForm) return;

        if (id) {
            postPatch('patch', `/api/products/update-product/${id}`, 'Produto atualizado com sucesso')
            return
        }
        const produtoExistente = produtos.filter(item => item.name === produto.name)
        if (produtoExistente.length > 0) {
            toast.warn(`O produto ${produto.name} já esta cadastrado`)
            return;
        }
        postPatch('post', '/api/products/create-product', 'Produto cadastrado com sucesso')
    }

    return (
        <ContainerProduto>
            <h1>{id ? 'Editar produto' : 'Cadastrar Produto'}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={produto.name}
                    placeholder="Nome do produto"
                    onChange={(e) => setProduto((prevProduto) => ({
                        ...prevProduto,
                        name: e.target.value,
                    }))}
                >
                </input>

                <input
                    type="text"
                    value={produto.description}
                    placeholder="Descrição do produto"
                    onChange={(e) => setProduto((prevProduto) => ({
                        ...prevProduto,
                        description: e.target.value,
                    }))}
                >
                </input>

                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={produto.price}
                    placeholder="Preço do produto"
                    onChange={(e) => setProduto((prevProduto) => ({
                        ...prevProduto,
                        price: !(e.target.value === '') ? parseFloat(e.target.value) : 0,
                    }))}
                >
                </input>

                <input
                    type="number"
                    min="0"
                    step="1"
                    value={produto.stock}
                    placeholder="Stock do produto"
                    onChange={(e) => setProduto((prevProduto) => ({
                        ...prevProduto,
                        stock: !(e.target.value === '') ? parseInt(e.target.value) : 0,
                    }))}
                >
                </input>
                <button type="submit">
                    {
                        id ?
                            'Atualizar'
                            :
                            'Cadastrar'
                    }

                </button>
            </form>
        </ContainerProduto>
    );
}