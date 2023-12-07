import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Article from './Article';

function ElementsArticle({ articles, deleteArticle, setPanier, panier }) {

    return (
        <div className="container">
            <div className="row">
                {
                    articles && Array.isArray(articles) &&
                    articles.map(article => (
                        <Article article={article} deleteArticle={deleteArticle} setPanier={setPanier} panier={panier} />
                    ))
                }
            </div>
        </div>
    );
}

export default ElementsArticle;
