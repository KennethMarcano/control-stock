import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { get } from "lodash";
import { toast } from "react-toastify";

import * as actions from '../../store/modules/auth/actions'
import axios from "../../services/axios";
import history from "../../services/history";
import { ContainerProduto } from "./styled";



export default function Produto({ match }) {
    const { id } = match.params;
    const dispatch = useDispatch();
    const [produto, setProduto] = useState({
        name: '',
        description: '',
        price: 1,
        stock: 1,
    })

    useEffect(() => {
        if (!id) return;
        async function getProduto() {
            try {
                const response = await axios.get(`/api/products/get-one-product/${id}`);
                setProduto({
                    name: response.data.data.product.name,
                    description: response.data.data.product.description,
                    price: response.data.data.product.price,
                    stock: response.data.data.product.stock,
                })
            } catch (e) {
                const errors = get(e, 'response.data.errors', []);
                const status = get(e, 'response.status', 0);
                if (errors.length > 0)
                    errors.map(error => toast.error(error));
                else
                    toast.error('Erro desconhecido')

                if (status === 401) dispatch(actions.loginFailure())
                history.push('/');
            }
        }

        getProduto();

    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        let errorForm = false;
        if(produto.name.length < 1) {
            errorForm = true;
            toast.error('O Nome do produto não pode estar vazio');
        }
        if(!(produto.price > 0)) {
            errorForm = true;
            toast.error('O preço do producto precisa ser um numero positivo');
        }
        if(!(produto.stock > 0)) {
            errorForm = true;
            toast.error('O stock do producto precisa ser um numero positivo');
        }
        if(errorForm) return;

        if(id){
            try {
                toast.loading('Carregando...', { position: 'top-center' })
                await axios.patch(`/api/products/update-product/${id}`,  produto )
                toast.dismiss();
                toast.success('Produto atualizado com sucesso')
                
            } catch (error) {
                toast.dismiss();
                const errors = get(error, 'response.data.message', []);
                 errors.map(error => toast.error(error));
            }
            return
        }

        try {
            toast.loading('Carregando...', { position: 'top-center' });
            await axios.post('/api/products/create-product',  produto );
            toast.dismiss();
            toast.success('Produto cadastrado com sucesso');
            history.push('/home');
            
        } catch (error) {
            console.log(error)
            toast.dismiss();
            const errors = get(error, 'response.data.message', []);
             errors.map(error => toast.error(error));
        }


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
                    value={produto.price}
                    step="0.01"
                    placeholder="Preço do produto"
                    onChange={(e) => setProduto((prevProduto) => ({  
                        ...prevProduto,
                        price: parseFloat(e.target.value),
                    }))} 
                >
                </input>

                <input
                    type="number"
                    value={produto.stock}
                    step="1"
                    placeholder="Stock do produto"
                    onChange={(e) => setProduto((prevProduto) => ({  
                        ...prevProduto,
                        stock: parseFloat(e.target.value),
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