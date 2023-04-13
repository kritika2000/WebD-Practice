import React, { useContext } from "react";
import { Context } from "../Context";
import Image from "../Components/Image";

function getClass(i) {
  if (i % 5 === 0) {
    return "big";
  } else if (i % 6 === 0) {
    return "wide";
  } else return "small";
}

function Photos() {
  const {
    allPhotos,
    cartItems,
    toggleFavorite,
    addImageInCart,
    removeImageFromCart,
  } = useContext(Context);
  console.log(allPhotos);
  const imageElements = allPhotos.map((img, i) => (
    <Image
      key={img.id}
      img={img}
      cartItems={cartItems}
      toggleFavorite={toggleFavorite}
      addImageInCart={addImageInCart}
      removeImageFromCart={removeImageFromCart}
      className={getClass(i)}
    />
  ));
  return <main className="photos--page">{imageElements}</main>;
}

export default Photos;

// Either use Context.Consumer or use useContext hook.
// <Context.Consumer>
//   {({ allPhotos }) => (
//     <main className="photos--page">
//       {allPhotos.map((photo, i) => (
//         <Image key={photo.id} img={photo.url} className={getClass(i)} />
//       ))}
//     </main>
//   )}
//  </Context.Consumer>
