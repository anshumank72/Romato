import React from "react";
import "./Navbar.css";

const navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <h3>ROMATO</h3>
      </div>
      <div className="Nav_items">
        <nav>
          <ul>
            <li>
              <a href="/">log in</a>
            </li>
            <li>
              <a href="/">sign in</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default navbar;
