/*
In HTML forms, we've a submit button which would run a function and gather
all the data from the fields at that time and submits it to an API.
In React, we maintain an up-to-date state for every change that happens in any 
input.
*/
import React, { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  console.log(firstName + " " + lastName);
  function handleFirstName(e) {
    // Browser passes an event object to event listeners.
    // Every keystroke will invoke this function.
    // console.log("Input Changed!", e.target, e.target.value);
    // e.target returns the DOM element which triggers the event.
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  return (
    <form>
      <input
        //   listen to any changes that happens to the input.
        onChange={handleFirstName}
        type="text"
        placeholder="First Name"
      />

      {/* * Challenge: Track the applicant's last name as well */}

      <input
        //   listen to any changes that happens to the input.
        onChange={handleLastName}
        type="text"
        placeholder="Last Name"
      />
    </form>
  );
}
