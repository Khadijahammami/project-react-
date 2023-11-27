import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddArticle() {
    const navigate = useNavigate();

    const [reference, setReference] = useState("");
    const [designation, setDesignation] = useState("");
    const [marque, setMarque] = useState("");
    const [prixAchat, setPrixAchat] = useState("");
    const [prixVente, setPrixVente] = useState("");
    const [qtestock, setQtestock] = useState("");
    const [imageartpetitf, setImageartpetitf] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            reference,
            designation,
            marque,
            prixAchat,
            prixVente,
            qtestock,
            imageartpetitf
        };

        axios.post("http://localhost:3001/catalog", newProduct)
            .then(res => {
                console.log(res);
                navigate("/articles");
            })
            .catch(error => {
                console.log(error);
                alert("Erreur ! Insertion non effectuée");
            });
    }

    return (
        <div className="container">
            <h2>Ajout d'un produit </h2>
            <form onSubmit={handleSubmit}>
                {/* ... (votre formulaire ici) */}
            </form>
        </div>
    );
}

export default AddArticle;
