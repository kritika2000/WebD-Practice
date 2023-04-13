import React from "react";
import "./Sidebar.css";

const listData = [
  {
    heading: "Hydrogen VS Electric Cars",
    para: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    heading: "The Downsides of AI Artistry",
    para: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    heading: "Is VC Funding Drying Up?",
    para: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

function ListItem(data, index) {
  return (
    <li key={index}>
      <h3>{data.heading}</h3>
      <p> {data.para}</p>
      {index < 2 && <hr />}
    </li>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar--container">
      <div>New</div>
      <ul>{listData.map((d, i) => ListItem(d, i))}</ul>
    </aside>
  );
}

export default Sidebar;
