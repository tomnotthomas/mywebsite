import React from 'react';
import './projects.css';

function Projects({project}) {

  const docuaiContent= (
    <>
    <div className='split-screen'>
      <div id='video-box'>
        <iframe
          src='https://www.youtube.com/embed/NK2BDSg1eo8'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
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
      <h2 id='github-content-project'>
        <a id='github-link' href='https://github.com/tomnotthomas/Docu.ai'>SHOW PROJECT IN GITHUB</a></h2>
    </div>
  </div>
  <div className='split-screen'>
    <div id='description-box'>
    <h2 className='description-font-h2'>Docu.ai: automate document analysis</h2>

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
   
  </div>
  </>
  );

  const costsavings= (
    <>
    <div className='split-screen'>
      <div id='video-box'>
        <iframe
          src='https://youtube.com/embed/c9OEFzUrcG8'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
    </div>
    <div id='technologies-used'>
      <div className='tech-icon'>
        <img id='react-icon' alt='react' src='../../media/vue.js.png'></img>
      </div>
      <div className='tech-icon'>
      <img id='express-icon'alt='express.js' src='../../media/Expressjs.png'></img>
      </div>
      <div className='tech-icon'>
      <img id='mongo-db-icon' alt='mongodb' src='../../media/MongoDB_Logo.svg.png'></img>
      </div>
      <div className='tech-icon'>
      <img id='typescript-icon' alt='typescript' src='../../media/JavaScript-logo.png'></img>
      </div>
    </div>
    <div id='github'>
      <img id='github-logo-project' alt='github-logo' src='../../media/github-mark-white.svg'>
      </img>
      <h2 id='github-content-project'>
        <a id='github-link' href='https://github.com/tomnotthomas/GCP-cost-savings'>SHOW PROJECT IN GITHUB</a></h2>
    </div>
  </div>
  <div className='split-screen'>
    <div id='description-box'>
    <h2 className='description-font-h2'>Cloud Cost Savings: HouseMeister</h2>

    <p className='description-font'>
  Our software focuses on optimizing your financial resources within Google Cloud Platform (GCP).
  It efficiently gathers recommended cost-saving measures from GCP, consolidates these suggestions across your entire organization, and effectively schedules the implementation of these actions. This streamlined approach 
  is designed to maximize cost efficiency and minimize unnecessary expenditure in your cloud operations.
</p>
<p className='description-font'>Here is how it works:</p>

<h2 className='description-font-h2'>Identify all projects in your organization 📤</h2>
<p className='description-font'>
  The application begins by identifying all active projects within your organization on GCP. This comprehensive identification ensures that no potential saving opportunity is overlooked.
</p>

<h2 className='description-font-h2'>Gather resource information 🤖</h2>
<p className='description-font'>
  It then gathers detailed information on the resources utilized in these projects.
</p>

<h2 className='description-font-h2'>Collect recommended cost saving actions based on resources 🔄</h2>
<p className='description-font'>
  Utilizing the gathered resource data, the application compiles a list of recommended actions tailored to reduce costs. These suggestions are based on efficient resource management and optimization strategies specific to GCP.
</p>

<h2 className='description-font-h2'>Schedule recommended actions 🗃️</h2>
<p className='description-font'>
  The application assists in scheduling and implementing these recommended actions. This ensures timely execution of cost-saving measures while maintaining the smooth operation of your GCP infrastructure.
</p>

    </div>
    
  </div>
  </>
  );

  const cloudgaming= (
    <>
    <div className='split-screen'>
      <div id='video-box'>
        <iframe
          src='https://youtube.com/embed/srfJhV3f6ME'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        
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
      <h2 id='github-content-project'>
        <a id='github-link' href='https://github.com/tomnotthomas/Swiff'>SHOW PROJECT IN GITHUB</a></h2>
    </div>
  </div>
  <div className='split-screen'>
    <div id='description-box'>
    <h2 className='description-font-h2'>🎮 Introducing Swiff: The Ultimate Game Streaming Platform for Mac Users</h2>
  <p className='description-font'>
    Swiff revolutionizes the gaming experience for Mac users by seamlessly integrating with Steam and utilizing the power of Google Cloud Platform. Our innovative technology ensures that you have access to high-performance gaming servers, providing an unmatched gaming experience right from your Mac.
  </p>

  <h2 className='description-font-h2'>📁 Swiff's Seamless Structure</h2>
  <p className='description-font'>
    Swiff's architecture is elegantly divided into three core components: the client, the server, and our user-friendly React website. Each module is crafted using TypeScript, ensuring robust and efficient performance.
  </p>

  <h2 className='description-font-h2'>💻 Client: Your Gateway to Gaming</h2>
  <p className='description-font'>
    The client, akin to Netflix for games, is your user-friendly interface. It syncs effortlessly with the Steam API, showcasing your gaming library in an elegant, accessible format.
  </p>

  <h2 className='description-font-h2'>🖥️ Server: The Backbone of Swiff</h2>
  <p className='description-font'>
    Our server, the heart of Swiff, processes client requests, manages cloud server orchestration with Google Cloud, and securely stores data using MongoDB. This ensures a smooth and responsive gaming experience.
  </p>

  <h2 className='description-font-h2'>🌐 React Website: Swiff's Digital Hub</h2>
  <p className='description-font'>
    The React website offers an additional, intuitive way to interact with Swiff's services. Whether you're a gamer or just exploring, the site provides easy navigation and comprehensive information about our platform.
  </p>

  <h2 className='description-font-h2'>🛠️ Built with Cutting-edge Technology</h2>
  <p className='description-font'>
    Swiff is engineered using advanced technologies like TypeScript, Express.js, MongoDB, and React.js. This robust tech stack ensures a reliable, fast, and immersive gaming experience, elevating your play to the next level.
  </p>

    </div>
    
  </div>
  </>
  );







  return (
    <div id='projects'>
    
    {project === 1 && costsavings}
    {project === 2 && docuaiContent}
    {project === 3 && cloudgaming}
    </div>
  );
}

export default Projects;
