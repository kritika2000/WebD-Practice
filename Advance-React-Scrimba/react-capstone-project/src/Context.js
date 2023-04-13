import React, { useState, useEffect } from "react";
import axios from "axios";
// https://www.freecodecamp.org/news/how-to-use-axios-with-react/#what-is-axios

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
      .then((response) => {
        setAllPhotos(response.data);
      });
  }, []);

  function toggleFavorite(id) {
    const newPhotos = allPhotos.map((photo) => {
      return photo.id === id
        ? { ...photo, isFavorite: !photo.isFavorite }
        : photo;
    });
    setAllPhotos([...newPhotos]);
  }

  function addImageInCart(id) {
    const item = allPhotos.find((photo) => photo.id === id);
    setCartItems((prev) => [...prev, item]);
  }

  function removeImageFromCart(id) {
    const newCartItems = cartItems.filter((photo) => photo.id !== id);
    setCartItems([...newCartItems]);
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        cartItems,
        toggleFavorite,
        addImageInCart,
        removeImageFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
