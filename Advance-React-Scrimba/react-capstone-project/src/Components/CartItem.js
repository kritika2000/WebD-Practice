import React from "react";

function CartItem(props) {
  return (
    <div className="cart--container">
      <div className="cart--item">
        <img src={props.url}></img>
        <p>$11.99</p>
        <i
          className="fa fa-trash"
          onClick={() => props.removeImageFromCart(props.id)}
        ></i>
      </div>
    </div>
  );
}

export default CartItem;
