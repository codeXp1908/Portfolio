import React, { useRef } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Certificate from "./Components/Certificate";
import Showcase from "./Components/Showcase";
import Contact from "./Components/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="p-body select-none">
        <Home />
        <About />
        <Certificate />
        <Showcase />
        <Contact />
      </div>
    </>
  );
};

export default App;
