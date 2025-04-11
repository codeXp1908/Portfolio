import React from "react";
import Home from './components/Home.jsx';
import About from "./components/About.jsx";
import Certificate from "./components/Certificate.jsx";
import Showcase from "./components/Showcase.jsx";
import Contact from "./components/Contact.jsx";
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
