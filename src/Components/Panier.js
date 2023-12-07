import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Panier({ panier }) {
    const [selectedArticles, setSelectedArticles] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        for (const [id, qte] of Object.entries(panier)) {
            axios.get(`http://localhost:3001/catalog/${id}`)
                .then((response) => {
                    const newArt = { ...response.data, qte }
                    setSelectedArticles(prev => [...prev, newArt])
                    setTotal(prev => prev + (Number(response.data.price) * qte))
                })
                .catch((error) => console.error(error));
        }
    }, []);

    console.log(selectedArticles)
    console.log(total)

    return (
        <div className='container'>
            <h2 className='text-center my-3'>Mon panier</h2>
            <div className='row'>
                <div className='col-6'>
                    {
                        selectedArticles.map(article => (
                            <div class="card mb-3" style={{ maxWidth: 540 }}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={article.image} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{article.name}</h5>
                                            <p class="card-text">{article.description}</p>
                                            <p class="card-text"><small class="text-muted">{article.price} x {article.qte}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='col-6 d-flex justify-content-center align-items-center'>
                    <div class="badge text-bg-primary" style={{fontSize: "1.5em"}}>
                        Total <span class="badge text-bg-secondary">{total} DT</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panier;
