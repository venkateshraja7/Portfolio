import React from 'react'
import './about.css'
const About = () => {
  return (
    <>
    <div className='about'>
        <div className='container'>
            <div className='top_container'>
                <div className='left_box'>
                    <div className='content'>
                        <div className='img_box'>
                            <img src='img/myimage.png' alt='me'></img>
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                    <div className='content'>
                        <div className='heading'>
                            <img src='img/star-2.png' alt='star'></img>
                            <h2>SELF INFO</h2>
                            <img src='img/star-2.png' alt='star'></img>
                        </div>
                        <div className='detail'>
                            <img src='img/icon2.png' alt='icon'></img>
                            <div className='info'>
                                <h3>VENKAT</h3>
                                <p>Web Developer from Tamil Nadu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mid_container'>
                <div className='container'>
                    <div className='exp'>
                        <h2>Experience</h2>
                        <div className='box'>
                            <p>2021-2023</p>
                            <h3>Front-End Developer</h3>
                            <p>Freelance</p>
                        </div>
                    </div>
                    <div className='edu'>
                        <h2>Education</h2>
                        <div className='box'>
                            <p>2018-2019</p>
                            <h3>SSLC</h3>
                            <p>Vaagai Vidyalaya MAtriculation School</p>
                        </div>
                        <div className='box'>
                            <p>2020-2021</p>
                            <h3>HSC</h3>
                            <p>VaagaiVidhyalaya MAtriculation Higher Secondary School</p>
                        </div>
                        <div className='box'>
                            <p>2021 - 2025</p>
                            <h3>Bachelor Degree in Information Technology</h3>
                            <a href="https://www.kgkite.ac.in/">Visit Kgisl website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About