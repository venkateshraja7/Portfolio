import React from 'react'
import './work.css'
const Work = () => {
  return (
    <>
    <div className='work'>
        <div className='container'>
            <div className='right'>
                <div className='heading'>
                <img src='img/star-2.png' alt='star'></img>
                    <h2>My Works</h2>
                    <img src='img/star-2.png' alt='star'></img>
                </div>
                <div className='content'>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='img/project1.jpeg' alt='project'></img>
                        </div>
                        <p>BURGER DESIGN</p>
                        <h3>HTML,CSS,JS</h3>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='img/project2.jpeg' alt='project'></img>
                        </div>
                        <p>Inventory Management</p>
                        <h3>Java</h3>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='img/project3.jpeg' alt='project'></img>
                        </div>
                        <p>Blog Application</p>
                        <h3>html,css,js</h3>
                    </div>
                    
                    

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Work