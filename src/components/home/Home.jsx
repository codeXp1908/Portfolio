import React from 'react'
import './home.css'
import Me from "../../assets/avatar-1.svg";
import HeaderSocial from './HeaderSocial';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';


const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Prakhar Saxena</h1>
        <span className="home__eduaction">I'm a front-end developer</span>
        
        <HeaderSocial />

        <a href="#contact" className="btn">Hire Me</a>
        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home