import React from "react";
import ScrollAnimationLeft from "../utils/ScrollAnimationLeft";
import { FaLocationDot } from "react-icons/fa6";
import profileimg from "../assets/profile.png";
import Skills from "./Skills";

const About = () => {
  return (
    <>
      <div className="about_Container bg-transparent body w-full min-h-screen flex flex-col justify-around py-4">
        <ScrollAnimationLeft>
          <h1 className="text-center text-2xl md:text-right md:text-6xl font-bold text-gray-600 underline underline-offset-8 uppercase px-3 py-10 text-[30px]">
            About
          </h1>
        </ScrollAnimationLeft>

        <ScrollAnimationLeft>
          <div className="about_Content flex flex-col md:flex-row items-center w-full p-4 sm:p-6 gap-6 sm:gap-8 justify-evenly">
            <div className="image_about flex justify-center w-full md:w-auto">
              <img
                src={profileimg}
                alt="Prakhar Saxena"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="about_text w-full md:w-1/2 space-y-3 sm:space-y-4 flex flex-col justify-between">
              <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-center md:text-left">
                Prakhar Saxena
              </h1>
              <p className="text-justify md:text-left text-sm sm:text-base">
                I'm more than one in love with Front-End development. My
                experience with interface design has made me extremely
                detail-oriented with alignments, margins, colors, and many other
                CSS resources. Today I work on projects worldwide while coding
                from my home.
              </p>
              <p className="location flex justify-center md:justify-start items-center space-x-2 text-sm sm:text-base">
                <FaLocationDot /> Jabalpur, Madhya Pradesh(IN).
              </p>
            </div>
          </div>
        </ScrollAnimationLeft>

        <ScrollAnimationLeft>
          <div className="skills_Container flex items-center justify-center cursor-pointer px-2 sm:px-4">
            <Skills/>
          </div>
        </ScrollAnimationLeft>
      </div>
    </>
  );
};

export default About;
