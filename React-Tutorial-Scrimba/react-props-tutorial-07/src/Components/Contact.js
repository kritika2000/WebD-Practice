import React from "react";
import "./Contact.css";
import phone from "../images/phone-icon.png";
import email from "../images/mail-icon.png";

/* 
The functional component takes a props parameter 
containing data passed from the parent component.
'props' makes the component reusable.
*/
// always pass an imported images as prop instead of passing relative image urls.
export default function Contact(props) {
  // props object destructuring.
  // {img, name, phone, email} can be passed as parameter instead of props
  const { img, name } = props;
  return (
    <div className="contact-card">
      <img src={img} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={phone} />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={email} />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
// --------------Quiz--------------
/*

1. What do props help us accomplish?
Make a component more reusable.


2. How do you pass a prop into a component?
<MyAwesomeHeader title="???" />


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
An object!

 */
