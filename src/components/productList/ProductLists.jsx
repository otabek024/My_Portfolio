import React from 'react'
import './productList.css'
import Product from '../product/Product'

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
          My Projects and Services
        </h1>
        <p className="pl-desc">
          So far, I have done several projects in HTML, CSS, JavaScript and React. <br /> Currently, I am 
          focusing more on React and trying to work with big projects.
        </p>
      </div>
      <div className="pl-list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default ProductList
