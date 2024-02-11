import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneInbound } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import './contact.css'
const Contact = () => {
    
  return (
    <>
    <div className='contact'>
        <div className='container'>
            <div className='left_box'>
                <h3>Contact Info</h3>
                <div className='info'>
                    <div className='box'>
                        <div className='icon'>
                            <HiOutlineMail />
                        </div>
                        <div className='detail'>
                            <h4>Mail Me</h4>
                            <p>venkateshraja.r773@gmail.com</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <BsTelephoneInbound />
                        </div>
                        <div className='detail'>
                            <h4>Contact Me</h4>
                            <p>+91 9360267475</p>
                            
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <FiMapPin />
                        </div>
                        <div className='detail'>
                            <h4>Location</h4>
                            <p>pappambadi (barathi nagar),pappiradapatti (tk)dharamapuri (dt)-636905</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact