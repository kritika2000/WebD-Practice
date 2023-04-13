import React from "react";
import { Link, Routes, Route, useMatch } from "react-router-dom";
import Settings from "./Settings";
import Info from "./Info";

function Profile() {
  //https://blog.logrocket.com/using-hooks-react-router/
  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to={`/profile/info`}>Profile Info</Link>
        </li>
        <li>
          <Link to={`/profile/settings`}>Profile Settings</Link>
        </li>
      </ul>
      {/* <Routes>
        <Route path="/profile/info" element={<Info />} />
        <Route path="/profile/settings" element={<Settings />} />
      </Routes> */}
    </div>
  );
}

export default Profile;
