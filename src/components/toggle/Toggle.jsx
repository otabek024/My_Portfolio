import React from 'react'
import './toggle.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context'

const Toggle = () => {
  const theme = useContext(ThemeContext);
  
  const handleClick = () => {
    theme.dispatch({type: "TOGGLE"})
  }

  return (
    <div className="t">
      <i className="fas fa-sun"></i>
      <i className="far fa-moon"></i>
      <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}
export default Toggle
