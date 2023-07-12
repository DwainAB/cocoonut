import React, {useState} from "react";
import "./Navbar.css"
import logo from "../../Assets/logo.png";
import iconSearch from "../../Assets/icon-search.png"
import iconHeart from "../../Assets/icon-heart.png"
import iconAccount from "../../Assets/icon-account.png"
import iconBasket from "../../Assets/icon-basket.png"

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return(
        <div className="container-nav">
            <nav className={isMenuOpen ? "nav-open" : ""}>
                <ul className={`nav-links ${isMenuOpen ? "" : "list-none"}`}>
                    <li className="links"><a href="/">accueil</a></li>
                    <li className="links"><a href="#shop">shop</a></li>
                    <li className="links"><a href="#gallery">inspirations</a></li>
                </ul>

                <div className="container-logo">
                    <img src={logo} alt="" className="logo" />
                </div>

                <ul className={`nav-action-account ${isMenuOpen ? "" : "list-none"}`}>
                    <li className="action-account"><img src={iconSearch} alt="" /></li>
                    <li className="action-account"><img src={iconAccount} alt="" /></li>
                    <li className="action-account"><img src={iconHeart} alt="" /></li>
                    <li className="action-account"><img src={iconBasket} alt="" /></li>
                </ul> 

                <div className="container-icon-menu" onClick={handleMenuClick}>
                    <ion-icon className="icon-menu" name="menu-outline"></ion-icon>
                </div>
            </nav>
        </div>
    )
}

export default Navbar