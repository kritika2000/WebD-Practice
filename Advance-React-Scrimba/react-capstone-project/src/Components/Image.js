import React, { useState } from "react";

function Image(props) {
  const { url, id, isFavorite } = props.img;
  const [hovered, setHovered] = useState(false);
  const index = props.cartItems.findIndex((photo) => photo.id === id);
  const [isAdded, setAdded] = useState(index === -1 ? false : true);

  function toggleCart() {
    setAdded((prev) => {
      return !prev;
    });
    !isAdded ? props.addImageInCart(id) : props.removeImageFromCart(id);
  }

  return (
    <div
      className={`${props.className} image--container ${isAdded && "incart"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => isAdded && toggleCart()}
    >
      {hovered && (
        <i
          className={`${!isFavorite ? "far" : "fas"} fa-heart`}
          onClick={() => props.toggleFavorite(id)}
        ></i>
      )}
      {hovered && !isAdded && (
        <i className={`fas fa-cart-plus`} onClick={toggleCart}></i>
      )}
      <img className="image-grid" src={url} />
    </div>
  );
}

export default Image;
