import React from "react";
import Navbar from "../utils/Navbar";
import profilepic from "../assets/profile.png";
import ScrollAnimation from "../utils/ScrollAnimations";
import handwave from "../assets/Waving Hand icon.svg";
import { FaArrowDownLong } from "react-icons/fa6";
import ScrollAnimationLeft from "../utils/ScrollAnimationLeft";

const Home = () => {
  return (
    <>
      {/* HEADER SECTION  */}
      <div className="w-full h-screen body text-sm flex flex-col justify-between">
        <ScrollAnimation>
          <Navbar />
        </ScrollAnimation>

        <div className="flex-1 flex flex-col justify-around">
          {/* IMAGE SECTION  */}
          <ScrollAnimationLeft>
            <div className="justify-center items-center flex flex-col mt-4 sm:mt-0">
              <div className="image_Container flex items-center justify-center">
                <img 
                  src={profilepic} 
                  className="circular-image w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" 
                  alt="Profile" 
                />
              </div>
              <span className="img-text bg-white text-base sm:text-lg md:text-xl flex font-semibold items-center mt-2 select-none">
                FrontEnd Developer{" "}
              </span>
            </div>
          </ScrollAnimationLeft>

          {/* TEXT SECTION  */}
          <ScrollAnimation>
            <div className="home_Text flex flex-col items-center sm:p-10 justify-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium select-none">
              <span className="text-gradient py-1! sm:py-1">Building digital</span>
              <span className="text-gradient sm:py-1!">products, projects</span>
              <span className="text-gradient sm:py-1!">and experience.</span>
            </div>
          </ScrollAnimation>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="scroll flex flex-col items-center justify-center text-xl h-16 sm:h-20 pb-4 sm:pb-0">
          <p className="scroll_arrow flex items-center">
            <FaArrowDownLong className="text-lg sm:text-xl" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
