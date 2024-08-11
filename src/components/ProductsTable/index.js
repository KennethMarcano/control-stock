import React from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

import { ContainerProductsTable } from "./styled";

export default function ProductsTable({ produtos ,handleDelete }) {
    return (
        <ContainerProductsTable>
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
                            <td className="price-stock">{String(produto.price).replace('.', ',')}</td>
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
    </ContainerProductsTable>
    )
}