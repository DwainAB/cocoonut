import React from "react";
import "./section-newsletter.css"

function SectionNewsletter(){
    return(
        <div className="container-section-newsletter">
            <div className="container-newsletter">

                <div className="container-left-newsletter">
                    <h2>newsletter</h2>
                    <p>Abonnez vous à nos newsletter afin de restez informer de toutes nos nouveautés et profiter de bons plans</p>
                </div>

                <div className="container-right-newsletter">
                    <form action="" className="form-newsletter">
                        <input type="email" placeholder="E-mail" />
                    <button type="submit">Souscrire</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default SectionNewsletter