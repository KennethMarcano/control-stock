import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "lodash";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import { toast } from "react-toastify";

import axios from "../../services/axios";
import history from "../../services/history";
import { ContainerProdutos } from "./styled";

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);


    useEffect(() => {
        async function getProdutos() {
            toast.loading('Carregando...', { position: 'top-center' })
            try {
                const response = await axios.get('/api/products/get-all-products')
                setProdutos(response.data.data.products);
                toast.dismiss();
            } catch (error) {
                toast.dismiss();
                const errors = get(error, 'response.data.message', []);
                errors.map(error => toast.error(error));
            }
        }

        getProdutos();

    }, [])

    async function handleDelete(e, index, id, name) {
        e.preventDefault();
        let deleteConfirm = true;
        if (deleteConfirm) {
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
            <div class="responsive-table">
                <table>
                    <thead>
                        <tr>
                            <th className="ferts">Codigo</th>
                            <th className="name">Nome</th>
                            <th>Descrição</th>
                            <th className="price-stock">Preço (R$)</th>
                            <th className="price-stock">Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            produtos.map((produto, index) => (
                                <tr key={produto.id}>
                                    <td className="ferts">{produto.id}</td>
                                    <td className="name">{produto.name}</td>
                                    <td>{produto.description}</td>
                                    <td className="price-stock">{produto.price}</td>
                                    <td className="price-stock">{produto.stock}</td>
                                    <td className="edit-delete">
                                        <Link to={`/produto/${produto.id}/edit`}>
                                            <FaEdit size={18} />
                                        </Link>
                                        <Link onClick={(e) => handleDelete(e, index, produto.id, produto.name)} to={`/produto/${produto.id}/delete`}>
                                            <FaWindowClose size={18} />
                                        </Link>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Link className="button-cadastrar" to={`/produto`}>Cadastrar Produto</Link>
        </ContainerProdutos>
    )
}