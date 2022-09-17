import React, { useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Header({ setter }) {
  const [open, setOpen] = useState(false);
  const url = useParams();
  const navigate = useNavigate();

  // const refer = document.getElementById("footer");
  const scrollto = async () => {
    if (url.name) {
      navigate("/");
    }
    setter(true);
  };
  return (
    <motion.div
      initial={{ translateY: -200, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      exit={{ translateY: -200 }}
      transition={{
        duration: 1,
        delay: 1,
        default: { ease: "easeIn" },
      }}
    >
      <div className="header container">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "black" }}
          className="header-logo"
        >
          <h3>HADJAZ BRAHIM </h3>
        </Link>
        <div className="header-links ">
          {!url.name && (
            <ul className={` ${!open && "close"}`}>
              <li>
                <a href="#main">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          )}
        </div>
        <div className="header-Text">
          <button onClick={scrollto}>Let's Chat</button>
        </div>
        {!url.name && (
          <div className="barIcon">
            <FaBars
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            />
          </div>
        )}
      </div>
      <div className={`links-hight container ${!open && "close"} `}>
        {!url.name && (
          <ul>
            <li>
              <a href="#main">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default Header;
