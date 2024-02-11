import React from 'react'
import './footer.css'
import {AiOutlineDoubleRight} from 'react-icons/ai';
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='top_container'>
            <div className='content'>
                <div className='left_box'>
                    <div className='box'>
                        <div className='detail'>
                            <h3>+2</h3>
                            <p>Year Experience</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='detail'>
                            <h3>+3</h3>
                            <p>Client's</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='detail'>
                            <h3>+3</h3>
                            <p>Total Projects</p>
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                    <img src='img/icon2.png' alt='icon'></img>
                    <div className='content'>
                        <div className='detail'>
                            <h2>Let's Work <span>Together</span></h2>
                        </div>
                        <div className='icon'>
                            <AiOutlineDoubleRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bottom_container'>
            <div className='container'>
                <div className='nav'>
                    <ul>
                        <li><Link to='/' className='link'>Home</Link></li>
                        <li><Link to='/about' className='link'>About</Link></li>
                        <li><Link to='/work' className='link'>Work</Link></li>
                        <li><Link to='/contact' className='link'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer