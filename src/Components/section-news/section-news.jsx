import React from "react";
import './section-news.css'
import imgItem from "../../Assets/img-item.png"

function SectionNews(){
    return(
        <div className="background-section-news">

            <div className="container-section-news">

                <div className="section-news-left">

                    <div className="news-left-no-img">
                        <h2 className="section-news-title">nouveautés</h2>
                    </div>

                    <div className="news-left-item">
                        <img className="img-item" src={imgItem} alt="" />
                        <div className="info-item">
                            <h3 className="title-item">AMELIA - Mirroir rotin</h3>
                            <p className="price-item">29,99 €</p>
                        </div>
                    </div>
                    <div className="news-left-item">
                        <img className="img-item" src={imgItem} alt="" />
                        <div className="info-item">
                            <h3 className="title-item">AMELIA - Mirroir rotin</h3>
                            <p className="price-item">29,99 €</p>
                        </div>
                    </div>
                    <div className="news-left-item">
                        <img className="img-item" src={imgItem} alt="" />
                        <div className="info-item">
                            <h3 className="title-item">AMELIA - Mirroir rotin</h3>
                            <p className="price-item">177 €</p>
                        </div>
                    </div>

                </div>

                <div className="section-news-right">
                    <div className="news-right-item">
                        <img src={imgItem} alt="" />
                        <div className="info-item">
                            <h3 className="title-item">Canapé en tissu gris</h3>
                            <p className="price-item">229 €</p>
                        </div>
                    </div>
                </div>
            </div>
                    
        </div>
    )
}

export default SectionNews