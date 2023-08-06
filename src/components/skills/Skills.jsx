import React from 'react'
import './skills.css'
import react from '../../img/react.png'
import js from '../../img/js.png'
import html from '../../img/html.png'
import css from '../../img/css.png'


const Skills = () => {
  return (
    <div className='s-main'>
        <h1 className="s-heading">My Skills</h1>
        <div className="skill-set">
            <img src={react} alt="" />
            <img src={js} alt="" />
            <img src={html} alt="" />
            <img src={css} alt="" />

        </div>
    </div>
  )
}

export default Skills