import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import HeroMeu from "../components/HeroMeu";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skils from "../components/Skils";

function Main() {
  return (
    <div>
      <Header />
      <HeroMeu />
      <About />
      <Services />
      <Skils />
      <Projects />
    </div>
  );
}

export default Main;
