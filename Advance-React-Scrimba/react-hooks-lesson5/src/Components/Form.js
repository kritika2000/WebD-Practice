import React, { useState } from "react";

function App() {
  /*
    If your states are not interconnected use separate states and function to modify
     state for each of the states
    But in a form we usually store the form data in object, and we have only
    one function to modify the whole object, we need to use spread operator
    to copy the data of all other fields which we don't have to in class components.
     */
  const [inputData, setInputData] = useState({ firstName: "", lastName: "" });
  const [contactsData, setContactsData] = useState([]);

  function handleChange(event) {
    setInputData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    console.log(inputData);
    event.preventDefault();
    // setContactsData((prevContacts) => [...prevContacts, inputData]);
    setContactsData(Object.values(inputData));
  }

  const contacts = contactsData.map((c) => <h1>{c}</h1>);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          name="firstName"
          value={inputData.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          value={inputData.lastName}
          onChange={handleChange}
        />
        <br />
        <button>Add contact</button>
      </form>
      {contacts}
      {/*{contacts}*/}
    </>
  );
}

export default App;
