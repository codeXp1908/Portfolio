import React from "react";
import Home from './components/Home.jsx';
import About from "./Components/About.jsx";
import Certificate from "./Components/Certificate.jsx";
import Showcase from "./Components/Showcase.jsx";
import Contact from "./Components/Contact.jsx";
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
