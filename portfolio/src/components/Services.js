import React from "react";
import "./Services.css";
import { FaDesktop, FaCode, FaTabletAlt } from "react-icons/fa";

function Services() {
  return (
    <div className="services container">
      <h2 className="section-name">Services</h2>

      <div className="services-container">
        <div>
          <span>
            <FaDesktop />
          </span>
          <h3>Web Design</h3>
          <p>
            loremLaborumVelit velit deserunt deserunt in eu enim labore ut
            commodo irure.
          </p>
        </div>
        <div>
          <span>
            <FaCode />
          </span>
          <h3>Web Deveolopement</h3>
          <p>
            loremLaborumVelit velit deserunt deserunt in eu enim labore ut
            commodo irure.
          </p>
        </div>
        <div>
          <span>
            <FaTabletAlt />
          </span>
          <h3>Responsive Design</h3>
          <p>
            loremLaborumVelit velit deserunt deserunt in eu enim labore ut
            commodo irure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
