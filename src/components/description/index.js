import React from 'react'
import './styles.css'

const DescriptionProduct = ({product}) => (

    <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>URL: <a href={product.url}></a>{product.url}</p>
    </div>

)

export default DescriptionProduct