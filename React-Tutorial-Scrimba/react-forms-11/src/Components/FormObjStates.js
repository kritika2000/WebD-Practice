import React, { useState } from "react";

export default function FormObjStates() {
  /* Instead of saving states in a separate variable for each 
    of the form elements, it's better to use a state object which handles all
     the states.
    */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  console.log(formData);
  function handleChange(e) {
    /* e.target will refer to the DOM element which triggers the event. 
    But we need a way to distinguish between which which element triggers the event
    to update the state.
    Solution:- give each input a name property and then we can use e.target.name
    to update the state.
    */
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <form>
      <input
        onChange={handleChange}
        type="text"
        placeholder="First Name"
        name="firstName"
      />

      <input
        onChange={handleChange}
        type="text"
        placeholder="Last Name"
        //   Better to give it a name same as that it is represented in the obj.
        name="lastName"
      />

      {/**
       * Challenge: add an email field/state to the form
       */}

      <input
        onChange={handleChange}
        type="email"
        placeholder="Enter an email"
        name="email"
      />
    </form>
  );
}
