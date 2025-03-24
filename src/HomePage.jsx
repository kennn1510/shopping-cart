import {Link} from "react-router-dom";

import "./HomePage.css"

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <div className="hero-image">
        <div className="hero-text">
          <h1>I am Ken</h1>
          <p>And I'm a Web Developer</p>
          <Link to="shop">Shop</Link>
        </div>
      </div>
    </>
  )
}

export default HomePage;