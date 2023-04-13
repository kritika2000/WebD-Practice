/*
HTML form elements maintain an internal state.
CC makes React state to be the “single source of truth” by adding
a value attribute to the form elements.
Since the value attribute is set on our form element, 
the displayed value will always be this.state.value, 
making the React state the source of truth.
*/
import React, { useState } from "react";
import "./form-styles.css";

export default function FormObjStates() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });
  function handleChange(e) {
    // Best practice to destructure event object.
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      console.log(e.target);
      return {
        ...prevFormData,
        // [e.target.name]: e.target.value,
        [name]: type !== "checkbox" ? value : checked,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // Here e.target returns ths whole form, we can get individual properties using their name .
    console.log(e.target.firstName.value);
    console.log(e.target);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
      />

      <input
        onChange={handleChange}
        type="text"
        placeholder="Last Name"
        name="lastName"
        /*
        now the value of the input is no longer be controlled by the input
        element but by React.
        Every change in the input will run handleChange function which updates the state
        onject which ultimately updates the value attribute of the input element.
        Now the state is telling the input box what to display not the element
        what the state should be.
        */
        //    value must always be the same as state property.
        value={formData.lastName}
      />

      <input
        onChange={handleChange}
        type="email"
        placeholder="Enter an email"
        name="email"
        value={formData.email}
      />

      {/* ------------------- TextArea --------------------- */}
      {/* React has made textarea similar to input elements with a self closing tag
       */}
      {/* <textarea>Whatever you put inside</textarea> */}
      <textarea
        value={formData.comments}
        onChange={handleChange}
        placeholder="Comments"
        name="comments"
      />

      {/* ------------------- Checkbox --------------------- */}

      <input
        type="checkbox"
        id="isFriendly"
        //   value is not used here, we use checked instead.
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>

      {/* ---------------------- Radio Buttons -------------------- */}

      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          /*  In radio button, we have to specifically mention a value 
        instead of setting it to a state property. */
          value="part-time"
          //   making it a controlled element.
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>

      {/* ------------------------ Select & Option --------------------- */}

      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      {/* Whenever a value is selcetd, onhandleChange() is executed,
      which updates the state with new favColor property and rerenders the 
      component with a new value.
       */}
      <select
        id="favColor"
        value={formData.favColor}
        defaultValue="blue"
        onChange={handleChange}
        name="favColor"
      >
        <option value="default">---Choose an option---</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>

      {/* -------------------- Submit a Form --------------------- */}
      <br />
      <br />
      {/* when this button is clicked it triggers the onSubmit event handler.
      Button inside a form element acts as a submit button, we don't need to mention it's type
       */}
      <button>Submit</button>
    </form>
  );
}

/* ------------------------- Quiz -----------------------------
1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?
Right before the form is submitted.


2. In a React app, when do you gather all the data from
   the filled-out form?
As the form is being filled out. The data is all held in local state.


3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
`name` property.


4. What's different about saving the data from a checkbox element
   vs. other form elements?
A checkbox uses the `checked` property to determine what should
be saved in state. Other form elements use the `value` property instead.


5. How do you watch for a form submit? How can you trigger
   a form submit?
- Can watch for the submit with an onSubmit handler on the `form` element.
- Can trigger the form submit with a button click.
*/
