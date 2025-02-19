import React from "react";
import "../css/navBar.css";

const navBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a>home</a>
        </li>
        <li>
          <a>about</a>
        </li>
        <li>
          <a>projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default navBar;
