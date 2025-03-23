import { Link } from "react-router-dom";

import "./NavBar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
    </nav>
  )
}

export default NavBar;