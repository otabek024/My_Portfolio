import React from 'react'
import './product.css'
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Product = ({img, link}) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='p'>
      <div style={{backgroundColor: darkMode && "crimson"}} className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img"/>
      </a>
    </div>
  )
}

export default Product
