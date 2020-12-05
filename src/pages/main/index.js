import React, { Component } from 'react'
import api from '../../services/api';
import './styles.css'

export default class Main extends Component {

    state = {
        products: [],
        productsInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadProducts()
    }

    nextPage = () =>{
        const {page, productsInfo} = this.state;

        if(page === productsInfo.pages) return;
        const pageNumber = page + 1;
        
        this.loadProducts(pageNumber)
    }

    prevPage = () =>{
        const {page} = this.state;
        if(page === 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber)
    }

    loadProducts = async (page = 1) => {
        const { data } = await api.get(`/products?page=${page}`);
        const {docs, ...productsInfo} = data
        this.setState({
            productsInfo,
            products: docs,
            page
        })
    }

    render() {
        const {products, productsInfo, page} = this.state;
        return (
            <div className="product-list">
                {
                    
                    products.map(item => (
                        <article key={item._id} >
                            <strong>{item.title}</strong>
                            <p>{item.description}</p>
                            <a>Acessar</a>
                        </article>
                    ))
                }
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage} className="btn">Anteriror</button>
                    <button disabled={page === productsInfo.pages} onClick={this.nextPage} className="btn">Próximo</button>
                </div>
            </div>
        )
    }

}