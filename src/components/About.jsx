import React from "react";
import ScrollAnimationLeft from "../utils/ScrollAnimationLeft";
import profileimg from "../assets/profile.png";

const About = () => {
  return (
    <>
      <div className="about_Container bg-transparent body w-full h-screen flex flex-col justify-around">
        <ScrollAnimationLeft>
          <h1 className="text-right p-2 text-4xl font-bold text-gray-600 underline underline-offset-8 uppercase">
            About
          </h1>
        </ScrollAnimationLeft>

        <ScrollAnimationLeft>
          <div className="about_Content flex flex-col md:flex-row items-center w-full p-6 gap-8 md:justify-around">
            <div className="image_about flex justify-center w-full md:w-auto">
              <img
                src={profileimg}
                alt="Prakhar Saxena"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="about_text w-full md:w-1/2 space-y-4">
              <h1 className="font-semibold text-2xl md:text-3xl text-center md:text-left">
                Prakhar Saxena
              </h1>
              <p className="text-gray-700 leading-relaxed text-justify md:text-left">
                I'm more than one in love with Front-End development. My
                experience with interface design has made me extremely
                detail-oriented with alignments, margins, colors, and many other
                CSS resources. Today I work on projects worldwide while coding
                from my home in the quiet surroundings of Jabalpur, Madhya
                Pradesh (IN).
              </p>
            </div>
          </div>
        </ScrollAnimationLeft>
      </div>
    </>
  );
};

export default About;
