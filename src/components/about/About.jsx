import React from 'react'
import './about.css'

const About = () => {
  return (
    <div id= "#about" className='a'>
        <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src="https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" className="a-img" />
        </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
          Welcome To my Portfolio, let's know about each other and Grow together.
          </p>
          <p className="a-desc">
          I am Devesh, a 20-year-old B.TECH student with an unwavering passion for web development. With an insatiable curiosity for all things tech, i immersed myself in the world of coding, constantly seeking to push the boundaries of what is possible on the web. React.js, in particular, has captured my heart, and i find solace and excitement in crafting dynamic and interactive user interfaces.
          </p>
          <div className="a-award">
            <img src="https://www.woodgeekstore.com/cdn/shop/products/programmerfunnytrophy_1200x.jpg?v=1616599200" alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">International Design Award</h4>
              <p className="a-award-desc">my heart races with excitement at the thought of receiving the prestigious International Design Award. As a passionate and dedicated designer, this award represents the pinnacle of recognition for my creative endeavors.

Ever since I was a child, I have been drawn to the world of design. From sketching simple doodles to crafting intricate digital masterpieces, I found solace and joy in expressing my thoughts and ideas through my websites.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
