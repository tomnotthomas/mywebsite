import React from 'react'
import './menu.css'
function Menu() {
  return (
    <div id='menu'>
      <div id='menu-info-box'>
    
      </div>
      <div id='main-menu-container'>
        <div id='main-menu'>
        <h2 className='main-menu-h2'>
           ABOUT ME
        </h2>
        <h2 className='main-menu-h2'>
            MY PROJECTS        
        </h2>
        </div>
        <div id='portfolio-menu'>
            <div className='image-container-menu'>
              <img alt='cloud-cost-saving-app' src='../../media/housemeister.png'></img>
            </div>


          <div className='image-container-menu'>
            <img  alt='cloud-cost-saving-app' src='../../media/docuai.png'></img>
          </div>
          <div className='image-container-menu'>
          <img  alt='cloud-cost-saving-app' src='../../media/swiff.png'></img>

          </div>
          
        </div>
      </div>
     
    </div>
  )
}

export default Menu