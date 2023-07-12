import React, { useState } from "react";
import "./section-gallery.css";
import img1 from '../../Assets/Rectangle 30.png';
import img2 from '../../Assets/Rectangle 33.png';
import img3 from '../../Assets/Rectangle 34.png';
import img4 from '../../Assets/Rectangle 35.png';
import img5 from '../../Assets/Rectangle 36.png';
import img6 from '../../Assets/Rectangle 37.png';
import img7 from '../../Assets/Rectangle 38.png';
import img8 from '../../Assets/Rectangle 39.png';
import img9 from '../../Assets/Rectangle 41.png';
import img10 from '../../Assets/Rectangle 40.png';
import img11 from '../../Assets/Rectangle 42.png';
import img12 from '../../Assets/Rectangle 43.png';

function SectionGallery() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [showMessage, setShowMessage] = useState(true);

  const handleImageHover = (index) => {
    setHoveredIndex(index);
    setShowMessage(false);
  };

  const handleImageLeave = () => {
    setHoveredIndex(-1);
    setShowMessage(true);
  };

  const handleGalleryHover = () => {
    setShowMessage(false);
  };

  return (
    <div id="gallery" className="container-section-gallery">
      <h2>galerie</h2>
      {showMessage && <p className="text-gallery" >Survolez à la découverte d'idée !</p>}
      <p>Partagez vos idées déco sur Instagram avec nous : @Cocoonut</p>

      <div className="container-gallery" onMouseEnter={handleGalleryHover}>
        {[
          img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
        ].map((image, index) => (
          <div
            className="grid"
            key={index}
            onMouseEnter={() => handleImageHover(index)}
            onMouseLeave={handleImageLeave}
            style={{ filter: hoveredIndex !== index ? 'blur(4px)' : 'none' }}
          >
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionGallery;
