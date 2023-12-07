import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Article({ article, deleteArticle, setPanier, panier }) {
    const [count, setCount] = useState(() => (
        panier[article.id] ?? 0
    ))
    const incrementArticle = (id) => {
        setPanier(prevPanier => (
            prevPanier[id] !== undefined ? {
                ...prevPanier,
                [id]: prevPanier[id] + 1
            } : {
                ...prevPanier,
                [id]: 1
            }
        ))
        setCount(prev => prev + 1)
    }

    const decrementArticle = (id) => {
        if (panier[id]) {
            if (panier[id] > 1)
                setPanier(prevPanier => ({
                    ...prevPanier,
                    [id]: prevPanier[id] - 1
                }))
            else {
                const newPan = {...panier}
                delete newPan[id]
                setPanier(newPan)
            }
            setCount(prev => prev - 1)
        }
    }

    return (
        <div key={article.id} className="col-sm-4">
            <div className="card" style={{ "width": "18rem" }}>
                <img src={article.image} className="card-img-top" alt={article.name} />
                <div className="card-body">
                    <h5 className="card-title">{article.name} ({count})</h5>
                    <p className="card-text">{article.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{article.price} TND</li>
                </ul>
                <div className="card-body">
                    <button className="btn btn-danger" onClick={() => deleteArticle(article.id)}>Supprimer</button>
                    <Link exact to={`/editArticle/${article.id}`} className="btn btn-primary">Modifier</Link>
                    <button className="btn btn-secondary" onClick={() => incrementArticle(article.id)}>+</button>
                    <button className="btn btn-secondary" onClick={() => decrementArticle(article.id)}>-</button>
                </div>

            </div>
        </div>
    );
}

export default Article;
