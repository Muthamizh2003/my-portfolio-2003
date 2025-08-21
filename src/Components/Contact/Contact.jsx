import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { TbBrandLeetcode } from "react-icons/tb";
import {AiFillFacebook,AiFillGithub,AiFillLinkedin,AiFillPhone,AiFillInstagram,AiFillDiscord, AiFillCodepenSquare, AiFillCode, AiFillCodeSandboxCircle, AiFillCodepenCircle, AiFillYoutube} from 'react-icons/ai'

const Contact = () => {
  
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6af3b401-dfcd-4446-9d6e-47fec4821a34");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message
            )
        }
      };
    
    return (
    <div id="contact" className='contact'>
        <div className='contact-title'>
            <h1>Get in touch with me</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                 <p>I can help with any projects that you need help with.I will be available to help for any time now or when needed😊</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>muthamizhcoding@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>7305466527</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Chennai,India</p>
                    </div>
                    <div className='icons'>
    <div>
        <a href="https://github.com/Muthamizh2003" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className='icon-github' />
        </a>
        <a href="https://www.instagram.com/sugureta_ningen/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className='icon-instagram' />
        </a>
        <a href="https://www.linkedin.com/in/muthamizh-kumaran-l-05433724a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxYdxPv2iT5eBU22tJN7Sow%3D%3D" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className='icon-linkedin' />
        </a>
        <a href="tel:91+7305466527">
            <AiFillPhone className='icon-phone' />
        </a>
        <a href="https://facebook.com/your_facebook" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook className='icon-facebook' />
        </a>
        <a href="https://discord.com/your_discord" target="_blank" rel="noopener noreferrer">
            <AiFillDiscord className='icon-discord' />
        </a>
        <a href="https://leetcode.com/u/Batmancoding/" target="_blank" rel="noopener noreferrer">
            <TbBrandLeetcode  className='leetcode' />
        </a>
        <a href="https://www.youtube.com/@Code_Leveler" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube  className='Youtube' />
        </a>
    </div>
</div>

                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor=''>Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type="submit" className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact