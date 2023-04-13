import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

function Book() {
  const { id } = useParams();
  const context = useOutletContext();
  return <h2>{`Book Component ${id}`}</h2>;
}

export default Book;
