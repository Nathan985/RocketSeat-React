import React, {useEffect, useState } from 'react'
import api from '../../services/api'
import DescriptionProduct from '../../components/description'


export default function Product(props) {
    const [product, setProdutct] = useState({})
    const { id } = props.match.params

    useEffect(() => {
        async function getProduct(){
            const {data} = await api.get(`/products/${id}`)
            setProdutct(data);
        }
        getProduct()
    }, [id])

    return (
        <DescriptionProduct product={product} />
    );
}