import React from "react";
import { Link, useLocation } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const cart = location.state?.cart || [];

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} * ₹{item.price}
              </li>
            ))}
          </ul>
          <h4>Total Price: ₹{calculateTotalPrice()}</h4>
        </>
      )}
      <Link to="/">Go Back to Products</Link>
      <h1>Thank You Visit Again!!</h1>
    </div>
  );
}

export default Cart;
