import {useContext, useEffect, useState} from "react";
import "./Shop.css"
import {CartContext} from "./CartContext.jsx";

function Shop() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error(`HTTP error! Status code: ${response.status}`);
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.log(`Error fetching products: ${error}`);
      }
    }
    fetchProducts();
  }, [])
  
  return (
    <div className="shop-container">
      <h1>Shopping in my Shopping Cart Yeah!</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop;