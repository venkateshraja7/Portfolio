import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import { AiOutlineDoubleRight, AiOutlineHtml5} from 'react-icons/ai';
import {  FaCss3Alt, FaPython, FaJava } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di'

const Home = () => {
  return (
    <>
    <div className='home'>
      <div className='top_container'>
        <div className='left_container'>
          <div className='img_container'>
              <div className='img_box'>
                <img src='img/myimage.png' alt='me'></img>
              </div>
          </div>
          <Link to='/about' className='link'>
          <div className='detail_container'>
            <h3>I'M VENKAT</h3>
            <p>Front End Developer</p>
            <div className='icon'>
            <AiOutlineDoubleRight />
          </div>
          </div>
          </Link>
        </div>
        <div className='right_container'>
          <div className='content'>
            <div className='top_box'>
              <p>Latest Works and Featured</p>
            </div>
            <div className='bottom_box'>
              <div className='box'>
                
                <Link to='/about' className='link'>
                <div className='detail'>
                  <div className='info'>
                    <h3>More About Me</h3>
                  </div>
                  <div className='icon'>
                    <AiOutlineDoubleRight />
                  </div>
                </div>
                </Link>
              </div>
              <div className='box'>
                
                <Link to='/work' className='link'>
                <div className='detail'>
                  <div className='info'>
                    <p>Showcase</p>
                    <h3>Projects</h3>
                  </div>
                  <div className='icon'>
                    <AiOutlineDoubleRight />
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mid_container'>
        <div className='content'>
          <div className='box2'>
            <div className='img_box'>
              <div className='img_container'>
                <FaPython />
                <AiOutlineHtml5 />
                <FaCss3Alt />
                <FaJava />
                <DiJavascript />
              </div>
            </div>
            <Link to='/services' className='link'>
            <div className='detail'>
              <div className='info'>
                <p>Specialization</p>
              </div>
                <div className='icon'>
                    <AiOutlineDoubleRight />
                </div>
            </div>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Home