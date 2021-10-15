import React from 'react'
import './intro.css'
import me from '../../img/Web-development-02.png'
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Intro = () => {
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="m">
      <div className="m-left">
        <div className="m-left-wrapper">
          <h2 className="m-intro">Hello, My name is</h2>
          <h1 className="m-name">Otabek Abdurakhmonov</h1>
          <div className="m-title">
            <div className="m-title-wrapper">
              <div className="m-title-item">Web Developer</div>
              <div className="m-title-item">Youtuber</div>
              <div className="m-title-item">Content Creator</div>
              <div className="m-title-item">Freelancer</div>
            </div>
          </div>
          <p className="m-desc">
            I design and develop services for customers of all sizes, 
            specializing in creating stylish, modern websites, web 
            services and online stores.
          </p>
          <div className="icons-box">
            <a href="https://t.me/abdurakhmonov99"><i className="fab fa-telegram"></i></a>
            <a href="https://github.com/otabek024"><i className="fab fa-github"></i></a>
            <a href="https://www.youtube.com/channel/UCPPIjmkbaopLMucC2fMs4fg"><i className="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/in/otabek-abdurahmonov-46772b213/"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="m-right">
        <div style={{backgroundColor: darkMode && "crimson"}} className="m-bg"></div>
        <img src={me} alt="" className='m-img'/>
      </div>
    </div>
  )
}

export default Intro
