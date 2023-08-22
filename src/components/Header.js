import {Link} from "react-router-dom"

import { useNavigate } from "react-router-dom"

import "./Header.css"

 
const Header = () => {
    const Navigate = useNavigate()
    const onClickLogout = () => {
        Navigate("/login")
    }
    return(
    <div className="header-container">
         <img src="https://i.ibb.co/C9kGJK5/download-3.jpg" alt="flipkart" className="image"/>
         <div className="links-logout-container">
         <ul className="link-container">
        <Link to="/" className="link-item">
        <li className="nav-links">Home</li>
        </Link>
        <Link to="/product" className="link-item">
        <li className="nav-links">Product</li>
        </Link>
        <Link to="/cart" className="link-item">
        <li className="nav-links">Cart</li>
        </Link>
        </ul>
        <button type="button" className="logout-button" onClick={onClickLogout}>Logout</button>
        </div>
    </div>
)
    }
export default Header