import React, { useState, useEffect } from "react";
import './section-news.css';

function SectionNews() {
  const [products, setProducts] = useState([]);
  const [fourthProduct, setFourthProduct] = useState(null);

  useEffect(() => {
    fetch('https://test-redcat.000webhostapp.com/allProduct.php')
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

  const handleMouseEnter = (index) => {
    const infoItem = document.getElementById(`info-item-${index}`);
    infoItem.classList.add("all-info-item");
  };

  const handleMouseLeave = (index) => {
    const infoItem = document.getElementById(`info-item-${index}`);
    infoItem.classList.remove("all-info-item");
  };

  const handleRightItemMouseEnter = () => {
    const infoItem = document.getElementById("info-item-right");
    infoItem.classList.add("all-info-item");
  };

  const handleRightItemMouseLeave = () => {
    const infoItem = document.getElementById("info-item-right");
    infoItem.classList.remove("all-info-item");
  };

  return (
    <div className="background-section-news">
      <div className="container-section-news">
        <div className="section-news-left">
          <div className="news-left-no-img">
            <h2 className="section-news-title">nouveautés</h2>
          </div>
          {products.map((product, index) => (
            <div
              className="news-left-item"
              key={product.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img className="img-item" src={`http://localhost:8888/testRedcat/${product.image}`} alt="" />
              <div id={`info-item-${index}`} className="info-item">
                <h3 className="title-item">{product.title}</h3>
                <p className="price-item">{product.price} €</p>
                <p className="description-item">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="section-news-right">
          {fourthProduct && (
            <div
              className="news-right-item"
              onMouseEnter={handleRightItemMouseEnter}
              onMouseLeave={handleRightItemMouseLeave}
            >
              <img src={`http://localhost:8888/testRedcat/${fourthProduct.image}`} alt="" />
              <div id="info-item-right" className="info-item">
                <h3 className="title-item">{fourthProduct.title}</h3>
                <p className="price-item">{fourthProduct.price} €</p>
                <p className="description-item">{fourthProduct.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SectionNews;
