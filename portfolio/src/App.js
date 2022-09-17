import { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Error from "./pages/Error";
import Main from "./pages/Main";
import ProjectDesc from "./pages/ProjectDesc";
import { AnimatePresence } from "framer-motion";

function App() {
  // animation part
  const location = useLocation();
  // console.log("locations",location);
  //////////////////////////////
  const cursor = useRef();
  window.addEventListener("mousemove", (e) => {
    cursor.current.style.top = e.pageY + "px";
    cursor.current.style.left = e.pageX + "px";
    console.log(e.target.classList);
    if (
      e.target.tagName == "BUTTON" ||
      e.target.classList.contains("desc") ||
      e.target.classList.contains("overlay") ||
      e.target.classList.contains("imageHolder")
    ) {
      cursor.current.classList.add("animate");
    } else {
      cursor.current.classList.remove("animate");
    }
    cursor.current.classList.contains("animate")
      ? (cursor.current.firstElementChild.innerText = "Tap")
      : (cursor.current.firstElementChild.innerText = "");
    if (cursor.current.classList.contains("animate")) {
      console.log("jj", cursor.current.classList);
    }
  });
  return (
    <div className="App">
      <div className="cursor" id="cursor" ref={cursor}>
        <span className="cursor-text">tap</span>
      </div>
      <AnimatePresence exitBeforeEnter={true}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} exact />
          <Route path="/project/:name" element={<ProjectDesc />} exact />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
