import React, { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroMeu from "../components/HeroMeu";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skils from "../components/Skils";
import { motion } from "framer-motion";

function Main() {
  const refer = useRef();
  const [scroll, setScroll] = useState(false);
  const setter = (value) => {
    setScroll(value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if (scroll) {
      refer.current.scrollIntoView();
    }
    return () => {
      setScroll(false);
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0,
        default: { ease: "easeInOut" },
      }}
    >
      <Header setter={setter} />
      <HeroMeu setter={setter} />
      <About />
      <Services />
      <Skils />
      <Projects />
      <Footer />
      <div ref={refer}></div>
    </motion.div>
  );
}

export default Main;
