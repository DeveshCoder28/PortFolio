import React, { useState } from 'react'
import './navbar.scss'




const Navbar = () => {
    const[isScrolled,SetIsScrolled]=useState(false);
    window.onscroll= ()=>{
        SetIsScrolled(window.scrollY ===0? false : true);
        return()=> window.onscroll=null
    };

  return (
    <div className={isScrolled? "navbar scrolled":"navbar"}>
      <div className="container">
        <div className="left">
            
            <span>About me</span>
            <span>Projects</span>
            <span>Contact</span>
            
        </div>
        <div className="right">
            
            
            
            
            <div className="profile">
            
            <div className="options">
                <span>Settings</span>
                <span>Logout</span>
            </div>
                
            </div>
            
       </div>
       
        </div>  
    </div>
  )
}

export default Navbar