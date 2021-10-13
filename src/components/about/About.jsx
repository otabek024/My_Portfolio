import React from 'react'
import './about.css'
import myPhoto from '../../img/IMG_1593.JPG'
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import InhaLogo from '../../img/InhaUniversityEmblem.png'


const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='a'>
      <div className="a-left">
        <div style={{backgroundColor: darkMode && "crimson"}} className="a-card bg"></div>
        <div className="a-card"
        style={{boxShadow: darkMode && "0px 0px 10px 0px crimson"}}
        >
          <img 
            src={myPhoto} 
            alt=""
            className="a-img"   
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am Web Developer with high experience and like coding on a daily basis. 
        </p>
        <p className="a-desc">
        Coding and programming careers have great earning potential and future. It gives 
        new perspective to problem-solving. Also, Learning to code offers career flexibility
        Communication is often overlooked as a strong skill amongst coders. What is more, coding 
        gives me a chance to gain these skills such as Creativity, Problem-solving, 
        Project-planning, Team-working and Abstract thinking.   
        </p>
        <div className="a-university">
          <img src={InhaLogo} alt="" className="a-university-img"/>
          <div className="a-university-texts">
            <h4>Graduate Student of Inha University in South Korea, Majored in IBT</h4>
            <p className="a-university-desc">
              Although I have majored in business field, I have studied several programming courses 
              becasuse our field is specialized broad. <br /> <br /> Thus, I studied basic programming, software programming, 
              IT and Patent, Big Data Analysis, and Database Management.
            </p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
