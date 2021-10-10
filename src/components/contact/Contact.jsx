import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Contact = () => {

  const formRef = useRef();
  const [done, setDone] = useState(false)
  const [user_name, setName] = useState("")
  const [ user_subject, setSubject] = useState("")
  const [ user_email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  const handleChange = (event) => {
    event.target.name=="user_name" 
    ? setName(event.target.value)
    : event.target.name=="user_email" 
    ? setEmail(event.target.value)
    : event.target.name=="message" 
    ? setMessage(event.target.value)
    : event.target.name=="user_subject"
    ? setSubject(event.target.value)
    : console.log("error")
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_y8l8wda', 
        'template_lbcd1kf', 
        formRef.current, 
        'user_UqHhvMPtDQ1lcHOdewTDl')
      .then((result) => {
        console.log(result.text);
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
        setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="c">
      <div style={{backgroundColor: darkMode && "crimson"}}  className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">
            Let's discuss your project
          </h1>
          <div className="c-info">
            <div className="c-info-item">
              <i className="fas fa-phone"> +821027849922 </i>
            </div>
            <div className="c-info-item">
              <i className="fas fa-envelope-open-text"> otabekabdurahmonov99@mail.ru </i>
            </div>
            <div className="c-info-item">
              <i className="fas fa-map-marker-alt"> Incheon, South Korea </i>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What is your message?</b> You can write me message here and I will read your message as soon as possible. 
            
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input 
            onChange={(e) => handleChange(e)}  
            value={user_name} 
            name="user_name" 
            style={{backgroundColor: darkMode && "#333"}} 
            type="text" 
            placeholder="Name" 
            />
            <input 
            onChange={(e) => handleChange(e)}  
            value={user_subject} 
            style={{backgroundColor: darkMode && "#333"}} type="text" 
            placeholder="Subject" 
            name="user_subject" />
            <input 
            onChange={(e) => handleChange(e)} 
            value={user_email} style={{backgroundColor: darkMode && "#333"}} 
            type="text" 
            placeholder="Email" 
            name="user_email" />
            <textarea 
            onChange={(e) => handleChange(e)} 
            value={message}  
            style={{backgroundColor: darkMode && "#333"}} rows="5" 
            placeholder="Message" 
            name="message" />
            <button style={{backgroundColor: darkMode && "crimson"}}>Submit</button>
            {done && "Thank you very much..."}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
