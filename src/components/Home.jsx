import React from "react";
import Navbar from "../utils/Navbar";
import profilepic from "../assets/profile.png";
import ScrollAnimation from "../utils/ScrollAnimations";
import { FaArrowDownLong } from "react-icons/fa6";
import ScrollAnimationLeft from "../utils/ScrollAnimationLeft";

const Home = () => {
  return (
    <>
      {/* HEADER SECTION  */}
      <div className="w-full h-screen md:h-screen body flex p-1 flex-col">
        <ScrollAnimation>
          <Navbar />
        </ScrollAnimation>

        <div className="content-wrapper flex-1 flex flex-col justify-around">
          {/* IMAGE SECTION  */}
          <ScrollAnimationLeft>
            <div className="image-container justify-center items-center flex flex-col">
              <div className="image-wrapper flex items-center justify-center">
                <img 
                  src={profilepic} 
                  className="circular-image w-50 h-50 md:w-50 md:h-50" 
                  alt="Profile" 
                />
              </div>
              <span className="img-text bg-white text-sm md:text-base flex font-semibold items-center mt-2 select-none">
                FrontEnd Developer{" "}
              </span>
            </div>
          </ScrollAnimationLeft>

          {/* TEXT SECTION  */}
          <ScrollAnimation>
            <div className="home-text home_Text flex flex-col items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-medium select-none px-4 text-center">
              <span className="text-gradient py-1">Building digital</span>
              <span className="text-gradient">products, projects</span>
              <span className="text-gradient">and experience.</span>
            </div>
          </ScrollAnimation>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="scroll-indicator opacity-0 md:opacity-100 scroll flex flex-col items-center justify-center text-xl h-16 pb-4">
          <p className="scroll_arrow flex items-center">
            <FaArrowDownLong className="text-lg" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
