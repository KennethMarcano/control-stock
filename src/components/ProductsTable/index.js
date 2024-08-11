import React from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

import { ContainerProductsTable } from "./styled";

export default function ProductsTable({ produtos, handleDelete }) {

    function search(e) {
        let tr
        let produto = e.target.value.toUpperCase();
        let infoProdutos = document.getElementsByClassName("infoProduto")
        for (let i = 0; i < infoProdutos.length; i++) {
            tr = infoProdutos[i].children[1].textContent;
            if (tr.toUpperCase().indexOf(produto) > -1) {
                infoProdutos[i].style.display = '';
            }
            else {
                infoProdutos[i].style.display = 'none';
            }
        }

    }

    return (
        <ContainerProductsTable>
            <input
                type="text"
                placeholder="Procurar pelo nome..."
                onKeyUp={(e) => search(e)}
            >
            </input>
            <table>
                <thead>
                    <tr>
                        <th className="ferts">Codigo</th>
                        <th className="name">Nome</th>
                        <th className="description">Descrição</th>
                        <th className="price-stock">Preço (R$)</th>
                        <th className="price-stock">Stock</th>
                    </tr>
                </thead>
                <tbody id="infoProduto">
                    {
                        produtos.map((produto, index) => (
                            <tr key={produto.id} className="infoProduto">
                                <td className="ferts">{produto.id}</td>
                                <td className="name">{produto.name}</td>
                                <td>{produto.description}</td>
                                <td className="price-stock">{String(produto.price).replace('.', ',')}</td>
                                <td className="price-stock">{produto.stock}</td>
                                <td className="edit-delete">
                                    <Link to={`/produto/${produto.id}/edit`}>
                                        <FaEdit color="blue" size={18} />
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
        </ContainerProductsTable>
    )
}