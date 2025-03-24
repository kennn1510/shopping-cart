import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function CartCounter() {
  const { cart } = useContext(CartContext);
  
  return (
    <div style={{ marginLeft: "20px" }}>
      Cart: {cart.length}
    </div>
  );
}

export default CartCounter;