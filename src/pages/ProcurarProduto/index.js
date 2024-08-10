import React, { useState } from "react";
import { get } from "lodash";
import axios from "../../services/axios";
import { toast } from "react-toastify";

import { ContainerProduto } from "./styled";



export default function ProcurarProduto() {

    const [nameProduto, setNameProduto] = useState('');
    const [produto, setProduto] = useState([])

    async function handleSubmit(e) {
        e.preventDefault();
        let errorForm = false;
        if(nameProduto.length < 1){
            errorForm = true;
            toast.error('Produto não especificado')
        }
        if (errorForm) return;
        toast.loading('Carregando...', { position: 'top-center' })
        try {
            const response = await axios.get('/api/products/get-all-products')
            const produtoExistente = response.data.data.products.filter(produto => produto.name === nameProduto)
            toast.dismiss();
            if(produtoExistente < 1) {
                toast.warn(`Não tem o producto: ${nameProduto} no stock`)
            }
            setProduto(produtoExistente);
        } catch (error) {
            toast.dismiss();
          //  const errors = get(error, 'response.data.message', []);
            //  errors.map(error => toast.error(error));
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
                <h1>tem</h1>
                :
                <></>
            }
        </ContainerProduto>
    );
}