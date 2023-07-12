import React, { useState } from "react";
import "./Form-add-product.css";
import iconHeart from "../../Assets/icon-heart.png"

function FormAddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageURL(imageURL);
    }
  };

  return (

    <div className="container-global-add-product">
        <h1>Ajouter un produit à votre catalogue</h1>

        <div className="container-section-form-add">
            <div className="container-form-add-product">

                <form enctype="multipart/form-data" method="POST" action="http://localhost:8888/testRedcat/add_product.php">

                    <div className="container-form-add-top">
                        <input type="text" placeholder="Titre" name="title" value={title} onChange={handleTitleChange} />
                        <input type="text" placeholder="Prix" name="price" value={price} onChange={handlePriceChange} />
                    </div>

                    <input type="text" placeholder="Description" name="description" value={description} onChange={handleDescriptionChange} />
                    <input type="file" accept="image/*" name="image" onChange={handleImageChange} />

                    <div className="container-btn-form-add"><button type="submit">Ajouter</button></div>
                    
                </form>

                <div className="container-show-product">
                    <div className="show-product">
                        <div className="container-img-show-product">
                            {imageURL ? <img src={imageURL} alt="Produit" /> : <p className="text-img-form">Aucune image sélectionnée</p>}
                        </div>
                        <div className="container-info-show-product">
                            <div className="container-info-top-show">
                                <h2>{title}</h2>
                                <img src={iconHeart} alt="" />
                            </div>
                            <div className="container-info-bottom-show">
                                <p>{description}</p>
                                <p>{price} €</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-form-dev">
                <h2>Support</h2>
                <p>Si vous rencontrez un problème technique ou avez besoin d'une assistance supplémentaire,
                veuillez remplir le formulaire ci-dessous en cliquant sur le bouton "Contacter le support" afin que nous
                puissions mieux comprendre votre situation et vous aider de manière plus efficace :</p>

                <div className="container-btn-support">
                    <button>Contacter le support</button>
                </div>
            </div>


        </div>

    </div>

  );
}

export default FormAddProduct;
