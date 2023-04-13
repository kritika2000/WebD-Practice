import React from "react";
import { useParams, useMatch } from "react-router-dom";
import servicesData from "./serviceData";

function ServiceDetail(props) {
  // catch params from the url separated by ':'
  // useful for dynamic routes.
  const { serviceId } = useParams();
  const thisService = servicesData.find((service) => service._id === serviceId);
  const match = useMatch("/services/:serviceId");
  console.log(match, useParams());
  return (
    <div>
      <h1>Service Detail Page</h1>
      <h3>
        {thisService.name} - ${thisService.price}
      </h3>
      <p>{thisService.description}</p>
    </div>
  );
}

export default ServiceDetail;
