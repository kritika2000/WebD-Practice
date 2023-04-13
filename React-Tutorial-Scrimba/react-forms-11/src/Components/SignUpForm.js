import React, { useState } from "react";
import "./SignUpForm.css";

/* Challenge: Connect the form to local state
 *
 * 1. Create a state object to store the 4 values we need to save.
 * 2. Create a single handleChange function that can
 *    manage the state of all the inputs and set it up
 *    correctly
 * 3. When the user clicks "Sign up", check if the
 *    password & confirmation match each other. If
 *    so, log "Successfully signed up" to the console.
 *    If not, log "passwords to not match" to the console.
 * 4. Also when submitting the form, if the person checked
 *    the "newsletter" checkbox, log "Thanks for signing
 *    up for our newsletter!" to the console.
 */

function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
    isChecked: false,
  });
  const styles = {
    backgroundColor:
      formData.password &&
      formData.confirmedPassword &&
      formData.password !== formData.confirmedPassword
        ? "rgb(255, 0, 0, 0.1)"
        : "white",
  };
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type !== "checkbox" ? value : checked,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (
      (formData.password &&
        formData.confirmedPassword &&
        formData.password !== formData.confirmedPassword) ||
      !formData.isChecked
    ) {
      console.log("Invalid Form!");
      return;
    }
    console.log(formData);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmedPassword"
          onChange={handleChange}
          value={formData.confirmedPassword}
          style={styles}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="isChecked"
            onChange={handleChange}
            checked={formData.isChecked}
          />

          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
