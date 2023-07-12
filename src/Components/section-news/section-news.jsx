import React, { useState, useEffect } from "react";
import './section-news.css';

function SectionNews() {
  const [products, setProducts] = useState([]);
  const [fourthProduct, setFourthProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8888/testRedcat/get_all_product.php')
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          const sortedProducts = data.product.sort((a, b) => b.id - a.id).slice(0, 3);
          setProducts(sortedProducts);

          if (data.product.length >= 4) {
            setFourthProduct(data.product[3]);
          }
        } else {
          console.error(data.message);
        }
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
      });
  }, []);

  return (
    <div className="background-section-news">
      <div className="container-section-news">
        <div className="section-news-left">
          <div className="news-left-no-img">
            <h2 className="section-news-title">nouveautés</h2>
          </div>
          {products.map(product => (
            <div className="news-left-item" key={product.id}>
              <img className="img-item" src={`http://localhost:8888/testRedcat/${product.image}`} alt="" />
              <div className="info-item">
                <h3 className="title-item">{product.title}</h3>
                <p className="price-item">{product.price} €</p>
              </div>
            </div>
          ))}
        </div>
        <div className="section-news-right">
          {fourthProduct && (
            <div className="news-right-item">
              <img src={`http://localhost:8888/testRedcat/${fourthProduct.image}`} alt="" />
              <div className="info-item">
                <h3 className="title-item">{fourthProduct.title}</h3>
                <p className="price-item">{fourthProduct.price} €</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SectionNews;
