// SkillsCards.jsx
import React from 'react';
import './SkillsCard.css';
import html5 from "../assets/logos/html5.svg"
import css from "../assets/logos/css.svg"
import js from "../assets/logos/js.svg"
import reactjs from "../assets/logos/reactjs.svg"
import tailwind from "../assets/logos/tailwind.svg"
import git from "../assets/logos/git.svg"
import swift from "../assets/logos/swift.svg"



const skills = [
  { name: 'HTML', color: '#E34F26', logo: `${html5}` },
  { name: 'CSS', color: '#1572B6', logo: `${css}` },
  { name: 'JavaScript', color: '#F7DF1E', logo: `${js}` },
  { name: 'React', color: '#61DAFB', logo: `${reactjs}` },
  { name: 'Tailwind', color: '#38B2AC', logo: `${tailwind}` },
  { name: 'Git', color: '#F05032', logo: `${git}` },
  { name: 'SwiftUI' , color: '#FF6D00' , logo: `${swift}`}
];

const SkillsCards = () => {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div 
          key={index} 
          className="skill-card"
          style={{ borderColor: skill.color , boxShadow: `2px 2px 10px ${skill.color}`}}
        >
          <div className="skill-logo">
            <img 
              src={skill.logo} 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = '/logos/default.svg';
              }}
            />
          </div>
          <h3 className="skill-name">{skill.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default SkillsCards;