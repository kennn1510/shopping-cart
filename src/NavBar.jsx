import { Link } from "react-router-dom";
import CartCounter from "./CartCounter";
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <CartCounter />
    </nav>
  )
}

export default NavBar;