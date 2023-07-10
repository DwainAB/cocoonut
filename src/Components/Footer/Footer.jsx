import React from "react";
import "./Footer.css"
import logo from "../../Assets/logo-white.png"
import iconFacebook from '../../Assets/icon-facebook.svg'
import iconPinterest from '../../Assets/icon-pinterest.svg'
import iconInstagram from "../../Assets/icon-instagram.svg"
import iconYoutube from "../../Assets/icon-youtube.svg"

function Footer(){
    return(
        <div className="container-footer">

            <div className="container-footer-links">

                <><img className="logo-footer" src={logo} alt="" /> </>

                <>
                <ul className="list-links">
                    <li className="link-footer">Contact</li>
                    <li className="link-footer">Qui sommes-nous</li>
                    <li className="link-footer">Nous rejoindre</li>
                </ul>
                </>
                <>
                <ul className="list-links">
                    <li className="link-footer link-footer-middle">Livraison</li>
                    <li className="link-footer link-footer-middle">Retour & remboursement</li>
                    <li className="link-footer link-footer-middle">Aide & FAQ</li>
                </ul>
                </>
                <>
                <ul className="list-links">
                    <li className="link-footer link-footer-right">Paramètre des cookies</li>
                    <li className="link-footer link-footer-right">Politiques relative aux cookies</li>
                    <li className="link-footer link-footer-right">Charte de protection des données</li>
                </ul>
                </>


                <div className="container-social-footer">
                    <h2>Suivez-nous</h2>
                    <ul className="list-socials">
                        <li className="social-footer"><img src={iconFacebook} alt="" /></li>
                        <li className="social-footer"><img src={iconInstagram} alt="" /></li>
                        <li className="social-footer"><img src={iconPinterest} alt="" /></li>
                        <li className="social-footer"><img src={iconYoutube} alt="" /></li>
                    </ul>
                </div>

            </div>

            <div className="container-footer-mention">
                <p className="footer-mention">Copyright © 2022 - Tous droits réservés - Mentions Légales - CGV</p>
            </div>

        </div>
    )
}

export default Footer