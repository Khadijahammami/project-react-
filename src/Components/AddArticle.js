import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { generateId } from '../utils/generateId';

function AddArticle() {
    const navigate = useNavigate();
    const id = generateId()
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id,
            name,
            description,
            price,
            image
        };

        axios.post("http://localhost:3001/catalog", newProduct)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(error => {
                console.log(error);
                alert("Erreur ! Modification non effectuée");
            });
    }

    return (
        <div className="container">
            <h2>Ajout d'un produit </h2>
            <form className='w-50' onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">name</label>
                    <input type="text" class="form-control" id="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div class="mb-3">
                    <label for=" description" class="form-label">description</label>
                    <input type="text" class="form-control" id=" description" placeholder=" description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="prixVent" class="form-label"> price</label>
                    <input type="text" class="form-control" id="   prixVent" placeholder=" prixVent" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for=" image" class="form-label"> image</label>
                    <input type="text" class="form-control" id=" image" placeholder=" image" value={image} onChange={(e) => setImage(e.target.value)} />
                    {
                        image && <img style={{ width: 100, height: 100 }} src={image} />
                    }

                </div>
                <button type="submit" class="btn btn-success">Success</button>
            </form>
        </div>
    );
}

export default AddArticle;
