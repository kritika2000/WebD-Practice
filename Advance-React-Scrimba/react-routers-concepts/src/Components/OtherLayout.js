import React from "react";
import { Link, Outlet } from "react-router-dom";

function OtherLayout() {
  return (
    <>
      <h1>OtherLayout Component</h1>
      <Outlet />
    </>
  );
}

export default OtherLayout;
