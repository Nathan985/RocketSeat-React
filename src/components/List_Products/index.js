import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

const ListProducts = ({ item }) => (

    <article key={item._id} >
        <strong>{item.title}</strong>
        <p>{item.description}</p>
        <Link to={`/products/${item._id}`}>Acessar</Link>
    </article>

)

export default ListProducts