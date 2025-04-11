import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaGitAlt, FaGithub, FaTerminal } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={24}/>, color: "bg-orange-100 text-orange-800" },
    { name: "CSS", icon: <FaCss3Alt size={24}/>, color: "bg-blue-100 text-blue-800" },
    { name: "JavaScript", icon: <FaJs size={24}/>, color: "bg-yellow-100 text-yellow-800" },
    { name: "React", icon: <FaReact size={24}/>, color: "bg-cyan-100 text-cyan-800" },
    { name: "SASS", icon: <FaSass size={24}/>, color: "bg-pink-100 text-pink-800" },
    { name: "Git", icon: <FaGitAlt size={24}/>, color: "bg-red-100 text-red-800" },
    { name: "GitHub", icon: <FaGithub size={24}/>, color: "bg-gray-800 text-white" },
    { name: "Terminal", icon: <FaTerminal size={24}/>, color: "bg-gray-200 text-gray-800" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-center text-2xl md:text-3xl font-bold uppercase text-gray-600 underline underline-offset-8 mb-8">
        Skills
      </h1>
      
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className={`${skill.color} rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center 
                        grayscale hover:grayscale-0 transition-all duration-300 
                        hover:scale-105 hover:shadow-md transform-gpu`}
          >
            <span className="mb-2">{skill.icon}</span>
            <span className="font-medium text-sm sm:text-base">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
