import React, { useState } from "react";
import "./ContactCard.css";
import Star from "./Star";

export default function App() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className="card">
        <img src="/images/user.png" className="card--image" />
        <div className="card--info">
          {/* All the properties passed to a custom properties are also custom properties.
          We can't directly apply event listeners to custom cumponents. 
          */}
          <Star
            isFavorite={contact.isFavorite}
            toggleFavorite={toggleFavorite}
          />
          <h2 className="card--name">{`${contact.firstName} ${contact.lastName}`}</h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
