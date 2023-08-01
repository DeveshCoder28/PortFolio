import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src="https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" className="a-img" />
        </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quibusdam, expedita laborum hic dolorem nam incidunt quaerat porro libero officiis, iure minus corrupti quia aperiam asperiores. Architecto in ab praesentium.
          </p>
          <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="a-award">
            <img src="https://www.woodgeekstore.com/cdn/shop/products/programmerfunnytrophy_1200x.jpg?v=1616599200" alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">Internation Design Award</h4>
              <p className="a-award-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
