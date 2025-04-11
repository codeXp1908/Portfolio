import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaGitAlt, FaGithub, FaTerminal } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5/>, color: "bg-orange-100 text-orange-800" },
    { name: "CSS", icon: <FaCss3Alt/>, color: "bg-blue-100 text-blue-800" },
    { name: "JavaScript", icon: <FaJs/>, color: "bg-yellow-100 text-yellow-800" },
    { name: "React", icon: <FaReact/>, color: "bg-cyan-100 text-cyan-800" },
    { name: "SASS", icon: <FaSass/>, color: "bg-pink-100 text-pink-800" },
    { name: "Git", icon: <FaGitAlt/>, color: "bg-red-100 text-red-800" },
    { name: "GitHub", icon: <FaGithub/>, color: "bg-gray-800 text-white" },
    { name: "Terminal", icon: <FaTerminal/>, color: "bg-gray-200 text-gray-800" },
  ];

  return (
    <div className="rounded-xl">
      <h1 className="item-center text-center text-2xl font-bold uppercase text-gray-600 underline">Skills</h1>
      <div className="p-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 p-20">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`${skill.color} rounded-lg p-10 flex items-center justify-center grayscale-100 hover:grayscale-0 space-x-2 transition-all duration-200 hover:scale-105 hover:border  hover:shadow-md`}
            >
              <span className="text-lg">{skill.icon}</span>
              <span className="font-medium text-xl">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
