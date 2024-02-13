import React from 'react';
import './projects.css';

function Projects() {
  return (
    <div id='projects'>
      <div className='split-screen'>
        <div id='video-box'>
          <iframe
            src='https://www.youtube.com/embed/NK2BDSg1eo8' // Corrected URL
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />    
        </div>
      </div>
      <div className='split-screen'>
        <div id='description-box'>
          <p className='description-font'>I developed this proof of Concept (POC) for a large fintech company
             with the aim to automate document checks against specific criteria.
             We leverage Amazon's machine learning algorithms, specifically AMAZON
             Textract, to extract and analyze data from documents. The goal is
             to assess the feasibility of creating an automated solution versus 
             purchasing an existing one. 
            Here's thejourney through our document analysis process: 
            </p>
          <p className='description-font'>Here's the journey through our document analysis process:</p>

          <h2 className='description-font-h2'>Document Upload 📤</h2>
          <p className='description-font'>Users upload their documents through our intuitive interface. Supported formats include PDF.</p>

          <h2 className='description-font-h2'>Automatic Analysis 🤖</h2>
          <p className='description-font'>Once uploaded, the documents undergo an automatic analysis. This step is crucial in extracting key information from each page.</p>

          <h2 className='description-font-h2'>Data Processing 🔄</h2>
          <p className='description-font'>Extracted data is then processed and structured for easy interpretation.</p>

          <h2 className='description-font-h2'>Storage and Retrieval 🗃️</h2>
          <p className='description-font'>Processed data is securely stored in MongoDB, making it easily accessible for future reference.</p>


        </div>
        <div id='technologies-used'>
          <div className='tech-icon'>
            <img id='react-icon' alt='react' src='../../media/react.svg'></img>
          </div>
          <div className='tech-icon'>
          <img id='express-icon'alt='express.js' src='../../media/Expressjs.png'></img>
          </div>
          <div className='tech-icon'>
          <img id='mongo-db-icon' alt='mongodb' src='../../media/MongoDB_Logo.svg.png'></img>
          </div>
          <div className='tech-icon'>
          <img id='typescript-icon' alt='typescript' src='../../media/Typescript_logo_2020.svg.png'></img>
          </div>
        </div>
        <div id='github'>
          <img id='github-logo-project' alt='github-logo' src='../../media/github-mark-white.svg'>
          </img>
          <h2 id='github-content-project'>SHOW PROJECT IN GITHUB</h2>
        </div>
      </div>
    </div>
  );
}

export default Projects;
