import React from "react";
import "./section-gallery.css"
import img from '../../Assets/img-item.png'

function SectionGallery(){
    return(
        <div id="gallery" className="container-section-gallery">

            <h2>gallerie</h2>
            <p>Partagez vos idées déco sur instagram avec nous : @Cocoonut</p>

            <div className="container-gallery">

                <div className="grid"><img src={img} alt="" /></div>
                <div className="grid"><img src={img} alt="" /></div>
                <div className="grid"><img src={img} alt="" /></div>
                <div className="grid"><img src={img} alt="" /></div>

                <div className="grid"><img src={img} alt="" /></div>
                <div className="grid"><img src={img} alt="" /></div>
                <div className="grid"><img src={img} alt="" /></div>
                <div className="grid"><img src={img} alt="" /></div>

                <div className="grid"><img src={img} alt="" /></div>
                <div className="grid"><img src={img} alt="" /></div>
                <div className="grid"><img src={img} alt="" /></div>
                <div className="grid"><img src={img} alt="" /></div>

            </div>

        </div>
    )
}

export default SectionGallery