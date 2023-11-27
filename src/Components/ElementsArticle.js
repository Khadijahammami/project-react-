import React from 'react';
import { Link } from 'react-router-dom';

function ElementsArticle({ articles, deleteArticle }) {
    return (
        <div className="container">
            <div className="row">
                {
                    articles && Array.isArray(articles) &&
                    articles.map(article => (
                        <div key={article.id} className="col-sm-4">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src={article.image} className="card-img-top" alt={article.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{article.name}</h5>
                                    <p className="card-text">{article.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{article.price} TND</li>
                                </ul>
                                <div className="card-body">
                                    <button className="btn btn-danger" onClick={() => deleteArticle(article.id)}>Supprimer</button>
                                    <Link exact to={`/editArticle/${article.id}`} className="btn btn-primary">Modifier</Link>
                                </div>
                               
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ElementsArticle;
