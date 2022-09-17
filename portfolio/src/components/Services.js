import React from "react";
import "./Services.css";
import { FaDesktop, FaCode, FaTabletAlt } from "react-icons/fa";

function Services() {
  return (
    <div className="services container" id="services">
      <h2 className="section-name">Services</h2>

      <div className="services-container">
        <div>
          <span>
            <FaDesktop />
          </span>
          <h3>Web Design</h3>
          <p>I will make a modern, clean and intuitive UI UX website design</p>
        </div>
        <div>
          <span>
            <FaCode />
          </span>
          <h3>Web Deveolopement</h3>
          <p>I will be your website designer and web developer</p>
        </div>
        <div>
          <span>
            <FaTabletAlt />
          </span>
          <h3>Responsive Design</h3>
          <p>I will create a modern responsive website design</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
