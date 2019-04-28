import React from "react";

import "./DashHeader.css";

const DashHeader = () => {
  return (
    <header className="header">
      <h1>Replate</h1>
      <ul>
        <li className="navLink">
          <strong>Logout</strong>
        </li>
      </ul>
    </header>
  );
};

export default DashHeader;
