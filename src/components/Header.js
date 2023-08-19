import {Link} from "react-router-dom"

import "./Header.css"

 
const Header = () => (
    <div className="header-container">
        <Link to="/">
        <p className="nav-links">Home</p>
        </Link>
        <Link to="/contact">
        <p className="nav-links">Contacts</p>
        </Link>
        <Link to="/about">
        <p className="nav-links">About</p>
        </Link>
    </div>
)
export default Header