import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div id="" className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
            <h1>Find me</h1>
                <p>I am a full-stack developer, and I haved honed my skills by working on multiple</p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt="" />
                    <input type='email' placeholder='Enter your Email'/>
                </div>
                <div className="footer-subscribe">
                    subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className="footer-bottom-left">
                ©️ 2024 Muthamizh Kumaran Loganathan.All rights reserved.
            </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer