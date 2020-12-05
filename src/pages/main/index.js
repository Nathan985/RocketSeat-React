import React, {useEffect, useState } from 'react'
import api from '../../services/api';
import ListProducts from '../../components/List_Products'


export default function Main() {

    const [products, setProducts] = useState([]);
    const [productsInfo, setProductsInfo] = useState([]);
    const [page, setPage] = useState([]);

    const loadProducts = async (page = 1) => {
        const { data } = await api.get(`/products?page=${page}`);
        const { docs, ...productsInfo } = data
        setProducts(docs);
        setProductsInfo(productsInfo)
        setPage(page)
    }

    const nextPage = () => {
        if (page === productsInfo.pages) return;
        const pageNumber = page + 1;
        loadProducts(pageNumber)
    }

    const prevPage = () => {
        if (page === 1) return;
        const pageNumber = page - 1;
        loadProducts(pageNumber)
    }


    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <div className="product-list">
            {

                products.map((item, key) => (
                    <ListProducts key={key} item={item} />
                ))
            }
            <div className="actions">
                <button disabled={page === 1} onClick={() => prevPage()} className="btn">Anteriror</button>
                <button disabled={page === productsInfo.pages} onClick={() => nextPage()} className="btn">Próximo</button>
            </div>
        </div>
    );

}