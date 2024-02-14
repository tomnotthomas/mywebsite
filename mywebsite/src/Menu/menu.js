import React from 'react';
import './menu.css';
import useSound from "use-sound";
import clickSound from "../Music/computer-processing-sound-effects-short-click-select-01-122134.mp3";


function Menu({onProjectSelect}) {
  const [playSound] = useSound(clickSound, {
    volume: 0.5,
  });
  
  const handleClick = (projectNumber) => {
    playSound();
    onProjectSelect(projectNumber);
  }

  return (
    <div id='menu'>
      <div id='main-menu-container'>
        <div id='main-menu'>
          <h2 className='main-menu-h2'>
            MY PROJECTS        
          </h2>
        </div>
        <div id='portfolio-menu'>
          <div className='image-container-menu' onClick={() => handleClick(1)}>
            <img id='img-cloud-cost-saving-app' alt='cloud-cost-saving-app' src='../../media/housemeister.png'></img>
          <h2 className='cloud-cost-saving-app-heading'>GCP Cost Savings Application</h2>
          </div>
          <div className='image-container-menu' onClick={() => handleClick(2)}>
            <img id='document-analysis' alt='document-analysis' src='../../media/docuai.png'></img>
            <h2 className='docuai-heading'>Docu.ai</h2>

          </div>
          <div className='image-container-menu' onClick={() => handleClick(3)}>
            <img id='cloud-gaming-platform' alt='cloud-gaming-platform' src='../../media/swiff.png'></img>
            <h2 className='swiff-heading'>Swiff-Cloud-Gaming</h2>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

