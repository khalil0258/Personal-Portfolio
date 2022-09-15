import React, { useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="header container">
      <div className="header-logo">
        <h3>HADJAZ BRAHIM </h3>
      </div>
      <div className="header-links ">
        <ul className={` ${!open && "close"}`}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
        </ul>
      </div>
      <div className="header-Text">
        <button>Let's Chat</button>
      </div>
      <div className="barIcon">
        <FaBars
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
}

export default Header;
