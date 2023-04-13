import React from "react";
import fb from "../resources/Facebook Icon.png";
import git from "../resources/GitHub Icon.png";
import insta from "../resources/Instagram Icon.png";
import twitter from "../resources/Twitter Icon.png";
import linkedIn from "../resources/Linkedin Icon.png";
import "./Media.css";
export default function Media() {
  return (
    <nav className="media--nav">
      <ul className="media--links">
        <li>
          <img src={fb} />
        </li>
        <li>
          <img src={git} />
        </li>
        <li>
          <img src={insta} />
        </li>
        <li>
          <img src={twitter} />
        </li>
        <li>
          <img src={linkedIn} />
        </li>
      </ul>
    </nav>
  );
}
