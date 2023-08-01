import React from 'react'
import './productList.css'
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire. Devesh Sharma</h1>
        <p className="pl-desc">
            Devesh is a Creative Portfolio that your work has been waiting for and i create beautiful websites like these, Any design, stunning portfolio styles, Beautiful work, great designs and a whole lot more inside.
        </p>
        </div>
        <div className="pl-list">
          {products.map((item) =>(
            <Product key={item.id} img={item.img} link={item.link}/>  ))}
        </div>
    </div>
  )
}

export default ProductList;