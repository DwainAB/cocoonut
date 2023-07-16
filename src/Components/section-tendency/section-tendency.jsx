import React from "react";
import { useState, useEffect } from "react";
import './section-tendency.css';
import iconLike from "../../Assets/icon-like.png"

function SectionTendency() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8888/testRedcat/get_all_product.php')
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          const limitedProducts = data.product.slice(0, 8);
          setProducts(limitedProducts);
        } else {
          console.error(data.message);
        }
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
      });
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleItemTendencyEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleItemTendencyLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div id="shop" className="container-section-tendency">
      <h2>tendances</h2>
      <div className="container-item-tendency">
        {products.map((product, index) => (
          <div
            className="item-tendency"
            key={product.id}
            onMouseEnter={() => handleItemTendencyEnter(index)}
            onMouseLeave={handleItemTendencyLeave}
          >
            <div
              className={`btn-add-product ${hoveredIndex === index ? 'active' : ''}`}
            >
              <p>+</p>
            </div>
            <img src={`http://localhost:8888/testRedcat/${product.image}`} alt="" />
            <div className="info-item-tendency">
              <div className="info-top-item-tendency">
                <h3 className="title-item-info-tendency">{product.title}</h3>
                <img src={iconLike} alt="" />
              </div>
              <div className="info-bottom-item-tendency">
                <p className="description-item-info-tendency">{product.description}</p>
                <p className="price-item-info-tendency">{product.price} €</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionTendency;
