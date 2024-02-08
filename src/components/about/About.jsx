import React from "react";
import "./about.css";
import Me from "../../assets/avatar-2.svg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About</h2>

      <div className="about__container grid">
        <img src={Me} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Prakhar, web developer from Jabalpur, Madhya Pradesh (IN) . I
              have rich experience in web site design and building and
              customization, also I am good at ReactJs.
            </p>
            <a href="/" className="btn cv__btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles frontend">
                <h3 className="skills__name">FrontEnd Development</h3>
                <span className="skills__number development">90%</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles uiux">
                <h3 className="skills__name">UI/UX</h3>
                <span className="skills__number development">60%</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles backend">
                <h3 className="skills__name">BackEnd Development</h3>
                <span className="skills__number development">30%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
