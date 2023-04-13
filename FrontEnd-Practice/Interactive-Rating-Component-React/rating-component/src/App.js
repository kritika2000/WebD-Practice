import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import image from "./images/illustration-thank-you.svg";
import ratingData from "./ratingData";
import Rating from "./Rating";

function App() {
  const [ratingArray, setRatingArray] = useState(ratingData);
  function toggleColor(key) {
    setRatingArray((prevRatingArray) => {
      return prevRatingArray.map((r) => {
        return r.value === key
          ? { ...r, selected: !r.selected }
          : { ...r, selected: false };
      });
    });
  }
  const selectedRating = ratingArray.filter((r) => r.selected);
  const getRatingDivs = ratingArray.map((r) => {
    const styles = {
      backgroundColor: r.selected
        ? "rgba(199, 93, 18, 0.8)"
        : "rgba(149, 156, 166, 0.1)",
    };
    return (
      <Rating
        key={r.value}
        data={{ ...r }}
        toggleColor={() => toggleColor(r.value)}
        styles={styles.backgroundColor}
      />
    );
  });

  return (
    <div class="outerContainer">
      <div class="container">
        <div class="starImage"></div>

        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div class="ratingContainer">{getRatingDivs}</div>
        <button
          onClick={() => {
            document.querySelector(".container").style.display = "none";
            document.querySelector(".thankYouContainer").style.display = "flex";
          }}
        >
          Submit
        </button>
      </div>
      <div class="thankYouContainer">
        <img src={image} />

        <div>
          {selectedRating.length
            ? `You Selected ${
                selectedRating[selectedRating.length - 1].value
              } out of 5`
            : `You haven't rated yet`}
        </div>

        <div class="thankYouDiv">Thank you!</div>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default App;
