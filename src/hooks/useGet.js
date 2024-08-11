import { useState } from "react";
import axios from "../services/axios";

export function useGet() {
    const [produtos, setProdutos] = useState([]);
    const [produto, setProduto] = useState({
        name: '',
        description: '',
        price: 0.01,
        stock: 1,
    })

    const getProduto = async (id) => {
            const response = await axios.get(`/api/products/get-one-product/${id}`);
            setProduto({
                name: response.data.data.product.name,
                description: response.data.data.product.description,
                price: response.data.data.product.price,
                stock: response.data.data.product.stock,
            })
    }

    const getProdutos = async () => {
        const response = await axios.get('/api/products/get-all-products')
        setProdutos(response.data.data.products);
    }

    return { produto, produtos, setProduto, setProdutos, getProduto, getProdutos }
}