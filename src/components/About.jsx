import React from "react";
import img from "../assets/img.png";
import SkillsCards from "../utils/SkillsCards";

const About = () => {
  return (
    <>
      <div className="gradient-corners Container about_Container">
        <h1 className="about_Title">About Me</h1>
        <div className="about_Content">
          <section className="about_img">
            <img src={img} alt="" />
          </section>
          <section className="about_text">
            <h3 className="about_name">Prakhar Saxena</h3>
            <p>
              I'm more than one in love for Front-End. My experience with
              interface design turn me one extremely criterious with alignments,
              margins, colors and a lot other resorces in CSS. Today I work with
              projects in a whole world. Codifiding in my home, in a
              quiet interior of Jabalpur, Madhya Pradesh(IN).
            </p>
          </section>
        </div>
        <div className="skill_section">
          <h2 className="skill_Title">Skills</h2>
          <SkillsCards/>
        </div>
      </div>
    </>
  );
};

export default About;
