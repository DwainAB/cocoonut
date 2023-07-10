import React from "react";
import "./Navbar.css"
import logo from "../../Assets/logo.png";
import iconSearch from "../../Assets/icon-search.png"
import iconHeart from "../../Assets/icon-heart.png"
import iconAccount from "../../Assets/icon-account.png"
import iconBasket from "../../Assets/icon-basket.png"

function Navbar(){
    return(
        <div className="container-nav">
            <nav>
                <ul className="nav-links">
                    <li className="links">accueil</li>
                    <li className="links">shop</li>
                    <li className="links">inspirations</li>
                </ul>

                <div className="container-logo">
                    <img src={logo} alt="" className="logo" />
                </div>

                <ul className="nav-action-account">
                    <li className="action-account"><img src={iconSearch} alt="" /></li>
                    <li className="action-account"><img src={iconAccount} alt="" /></li>
                    <li className="action-account"><img src={iconHeart} alt="" /></li>
                    <li className="action-account"><img src={iconBasket} alt="" /></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar