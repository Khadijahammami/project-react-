import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ElementsArticle from './ElementsArticle';

function ListArticles() {
    const [articles, setArticles] = useState([]);
    const [allArticles, setAllArticles] = useState([]);
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value)
        setTimeout(() => {
            setArticles(allArticles.filter(article => article.name.toLowerCase().includes(e.target.value.toLowerCase())))
        }, 500);
    }

    useEffect(() => {
        axios.get("http://localhost:3001/catalog")
            .then((response) => {
                setArticles(response.data)
                setAllArticles(response.data)
            })
            .catch((error) => console.error(error));
    }, []);

    const deleteArticle = async (id) => {
        if (!window.confirm("Are you sure you want to delete this article?")) {
            return;
        }

        try {
            await axios.delete(`http://localhost:3001/catalog/${id}`);
            setArticles(prevArticles => prevArticles.filter((article) => article.id !== id));
            console.log('Article deleted successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2 className='text-center my-3'>Liste des articles</h2>
            <form className="d-flex w-25 mx-auto mb-5" role="search">
                <input value={search} onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <ElementsArticle articles={articles} deleteArticle={deleteArticle} />
        </div>
    );
}

export default ListArticles;
