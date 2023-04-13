import React, { useContext } from "react";
import CartItem from "../Components/CartItem";
import { Context } from "../Context";

function Cart() {
  const { cartItems, removeImageFromCart } = useContext(Context);
  return (
    <main className="cart--page">
      <h1>Check out</h1>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          removeImageFromCart={removeImageFromCart}
        />
      ))}
      {cartItems.length > 0 && <button>Place Order</button>}
      {cartItems.length === 0 && <h3>No Items Selected</h3>}
    </main>
  );
}

export default Cart;
