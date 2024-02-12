import React from 'react'
import './projects.css'


function Projects() {
  return (
    <div id='projects'>
      <div className='split-screen'>
        <div id='video-box'></div>
      </div>
      <div className='split-screen'>
        <div id='description-box'>       
        </div>
        <div id='github'></div>
        <div id='technologies-used'></div>
      </div>
    </div>
  )
}

export default Projects