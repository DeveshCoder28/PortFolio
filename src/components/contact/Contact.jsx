import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import phone from "../../img/phone.png"
import Email from "../../img/Email.png"
import Address from "../../img/Address.png"

const Contact = () => {
    const formRef= useRef();
    const [done, setDone]= useState(false)
    

    const handleSubmit= (e)=>{
        e.preventDefault()
        emailjs.sendForm('service_232aa99', 'template_qp25b8i', formRef.current, 'kGF5Dsqk8ihlgv-zp')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Share Your Idea here.</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={phone}
                        alt="" 
                        className="c-icon" />
                        9891111049
                    </div>
                    <div className="c-info-item">
                        <img src={Email}
                        alt="" 
                        className="c-icon" />
                        romangamer2806@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address}
                        alt="" 
                        className="c-icon" />
                        C-3 Main Market Bhajanpura Delhi 53 India
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your Story?</b>Get in touch.We will build great projects together. Freelancing if the right person comes along.</p>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input type="Text" placeholder='Name' name='user_name' />
                        <input type="Text" placeholder='Subject' name='user_Subject' />
                        <input type="Text" placeholder='Email' name='user_email' />
                        <textarea rows="5" placeholder='Message' name='message'/>
                        <button>Submit</button>
                        {done && "Thank you"}
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Contact