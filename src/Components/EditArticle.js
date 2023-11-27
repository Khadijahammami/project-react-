import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditArticle() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3001/catalog/' + id)
            .then(res => {
                console.log(res.data)

                setName(res.data.name);
                setDescription(res.data.description);
                setPrice(res.data.price);
                setImage(res.data.image);
            }).catch(err => {
                console.log(err)
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: id,
            name,
            description,
            price,
            image
        };

        axios.put("http://localhost:3001/catalog/" + id, newProduct)
            .then(res => {
                console.log(res);
                navigate("/articles");
            })
            .catch(error => {
                console.log(error);
                alert("Erreur ! Modification non effectuée");
            });
    }

    return (
        <div className="container">
            <h2>Modification d'un produit </h2>
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
                    <img style={{ width: 100, height: 100 }} src={image} />

                </div>
                <button type="submit" class="btn btn-success">Success</button>
            </form>
        </div>
    );
}

export default EditArticle;
