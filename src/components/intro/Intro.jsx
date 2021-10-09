import React from 'react'
import './intro.css'
import me from '../../img/Web-development-02.png'

const Intro = () => {
  console.log(me)
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
              <div className="m-title-item">UI/UX Designer</div>
            </div>
          </div>
          <p className="m-desc">
            I design and develop services for customers of all sizes, 
            specializing in creating stylish, modern websites, web 
            services and online stores.
          </p>

        </div>
      </div>
      <div className="m-right">
        <div className="m-bg"></div>
        <img src={me} alt="" className='m-img'/>
      </div>
    </div>
  )
}

export default Intro
