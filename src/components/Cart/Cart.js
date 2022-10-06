import "./Cart.css";
import { useState } from "react";
import NoCart from "./NoCart/NoCart";

const Cart = () => {
  const [cart, setCart] = useState(false);
  return (
    <section className="container ">
      <div className="cart_container">
        {cart.length ? <NoCart /> : "There's item"}
      </div>
      
    </section>
  );
};

export default Cart;
