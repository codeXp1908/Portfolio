import React from "react";
import Typewriter from "react-typewriter-effect";

const Landing = () => {
  return (
    <>
      <div className="landing_Container Container gradient-corners">
        <h1 className="landing-title">
          <Typewriter
            text="Frontend Developer"
            cursorColor="transparent"
            typeSpeed={100}
          />
        </h1>
        <p className="landing-subtitle">Enjoy Exploring my portfolio</p>
      </div>
    </>
  );
};

export default Landing;