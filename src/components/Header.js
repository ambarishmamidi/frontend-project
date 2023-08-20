import {Link} from "react-router-dom"

import "./Header.css"

 
const Header = () => (
    <div className="header-container">
        <img src="https://i.ibb.co/C9kGJK5/download-3.jpg" alt="flipkart" className="image"/>
        <div className="link-container">
        <Link to="/">
        <p className="nav-links">Home</p>
        </Link>
        <Link to="/product">
        <p className="nav-links">Product</p>
        </Link>
        <Link to="/cart">
        <p className="nav-links">Cart</p>
        </Link>
        </div>
    </div>
)
export default Header