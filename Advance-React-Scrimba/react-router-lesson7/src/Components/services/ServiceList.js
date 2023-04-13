import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import serviceData from "./serviceData";
import ServiceDetail from "./ServiceDetail";

function ServicesList() {
  return (
    <div>
      <h1>Services List Page</h1>
      {serviceData.map((s) => (
        <h3>
          <Link to={`/services/${s._id}`}>{s.name}</Link> - ${s.price}
        </h3>
      ))}
    </div>
  );
}

export default ServicesList;
