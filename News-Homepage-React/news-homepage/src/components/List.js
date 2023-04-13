import React from "react";
import "./List.css";

const listData = [
  {
    logo: "./images/image-retro-pcs.jpg",
    id: "01",
    heading: "Reviving Retro PCs",
    para: "What happens when old PCs are given modern upgrades?",
  },
  {
    logo: "./images/image-top-laptops.jpg",
    id: "02",
    heading: "Top 10 Laptops of 2022",
    para: "Our best picks for various needs and budgets.",
  },
  {
    logo: "./images/image-gaming-growth.jpg",
    id: "03",
    heading: "The Growth of Gaming",
    para: "How the pandemic has sparked fresh opportunities.",
  },
];

function ListItem(data, index) {
  return (
    <li key={index}>
      <img src={data.logo} />
      <p>{data.heading}</p>
      <p> {data.para}</p>
    </li>
  );
}

function List() {
  return (
    <div className="footer--list">
      <ul>{listData.map((d, i) => ListItem(d, i))}</ul>
    </div>
  );
}

export default List;
