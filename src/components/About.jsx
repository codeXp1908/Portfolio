import React from "react";
import ScrollAnimationLeft from "../utils/ScrollAnimationLeft";
import { FaLocationDot } from "react-icons/fa6";
import profileimg from "../assets/profile.png";
import Skills from "./Skills";


const About = () => {
  return (
    <>
      <div className="about_Container bg-transparent body w-full h-screen flex flex-col justify-around">
        <ScrollAnimationLeft>
          <h1 className="text-right p-2 text-7xl font-bold text-gray-600 underline underline-offset-8 uppercase">
            About
          </h1>
        </ScrollAnimationLeft>

        <ScrollAnimationLeft>
          <div className="about_Content flex flex-col md:flex-row items-center w-full p-6 gap-8 justify-evenly">
            <div className="image_about flex justify-center w-full md:w-auto">
              <img
                src={profileimg}
                alt="Prakhar Saxena"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="about_text w-full md:w-1/2 space-y-4 flex flex-col justify-between h-50">
              <h1 className="font-semibold text-5xl text-center md:text-left">
                Prakhar Saxena
              </h1>
              <p className="text-justify md:text-left">
                I'm more than one in love with Front-End development. My
                experience with interface design has made me extremely
                detail-oriented with alignments, margins, colors, and many other
                CSS resources. Today I work on projects worldwide while coding
                from my home.
              </p>
              <p className="location flex text-center items-center space-x-2">
              <FaLocationDot /> Jabalpur, Madhya Pradesh(IN).
              </p>
            </div>
          </div>
        </ScrollAnimationLeft>

        <ScrollAnimationLeft>
          <div className="skills_Container flex items-center justify-center cursor-pointer">
          <Skills/>
          </div>
        </ScrollAnimationLeft>
      </div>
    </>
  );
};

export default About;
