import {Link} from "react-router-dom"

import "./Header.css"

 
const Header = () => (
    <div className="header-container">
        <Link to="/">
        <p className="nav-links">Home</p>
        </Link>
        <p className="nav-links">Contacts</p>
        <p className="nav-links">About</p>
    </div>
)
export default Header