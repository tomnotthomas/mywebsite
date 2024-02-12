import React from 'react'
import './menu.css'
function Menu() {
  return (
    <div id='menu'>
      <div id='menu-info-box'>
        <h3 id='menu-h3'>
          Blending Full Stack Development with Cloud Technology
        </h3>
      </div>
      <div>
        <div id='main-menu'>
        <h2 className='main-menu-h2'>
           About me
        </h2>
        <h2 className='main-menu-h2'>
            My Projects        
        </h2>
        </div>
        <div id='portfolio-menu'>
          <div className='portfolio-menu-container'></div>
          <div className='portfolio-menu-container'></div>
          <div className='portfolio-menu-container'></div>
          
        </div>
      </div>
     
    </div>
  )
}

export default Menu