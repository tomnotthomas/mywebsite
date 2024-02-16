import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";

import './about-me.css';

function AboutMe() {
  const [showJourney, setShowJourney] = useState(false);
  const [showWorkEnv, setShowWorkEnv] = useState(false);
  const [showValues, setShowValues] = useState(false);
  const [showBeliefs, setShowBeliefs] = useState(false);
  const [showHobbies, setShowHobbies] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);

  return (
    <div className='aboutme-container'>
      <h1>About Me</h1>

      <div className="section">
        <h2 onClick={() => setShowJourney(!showJourney)}>My Journey to Software Development</h2>
        {showJourney && (
          <p>
            Ever since the day I built a radio with my dad at the age of 7, I've been driven to create. This drive only grew stronger as I pursued my bachelor's in International Business, where I found my passion in specializing in Business Information Management. After graduating, I found myself in the tech industry, managing projects. It was great, but deep down, I knew I was meant to do more than just manage; I wanted to be one of the people building things. That's when I decided to take a big leap and become a full stack developer. Now, every day is about turning ideas into reality. I love mixing creativity and code to make the frontend look crisp, and then tackling the backend, piecing together the logic like a puzzle. It's not just a job; it's the thrill of invention. And guess what? I'm finally living my dream of being an inventor, using technology to solve problems and make something special.
          </p>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => setShowWorkEnv(!showWorkEnv)}>My Ideal Work Environment</h2>
        {showWorkEnv && (
          <p>
            In my perfect workspace, the quiet hum lets me dive deep into coding without distractions. I thrive alongside a team where everyone is self-motivated and organized, a team that believes in their ability to build incredible things, no matter the challenge. I'm at my best when surrounded by people who say, "I can do this!" and then go out and make it happen. I love being around curious minds, where honesty and transparency aren't just words, but the way we do things. A place buzzing with excitement for technology and the magic of creating something new? That's where I belong. I bring discipline to my work, but it's the passion for innovation and collaboration that really drives me.
          </p>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => setShowValues(!showValues)}>What I value</h2>
        {showValues && (
          <ul>
            <li>Proactiveness</li>
            <li>Earnesty</li>
            <li>Transparency</li>
            <li>Drive</li>
            <li>Teamwork</li>
            <li>Empathy</li>
          </ul>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => setShowBeliefs(!showBeliefs)}>My Beliefs</h2>
        {showBeliefs && (
          <ul>
            <li>Stay Ahead: Always think and plan one step ahead.</li>
            <li>Respect Each Person: Value and honor the uniqueness of every individual.</li>
            <li>Embrace Curiosity: Continuously ask questions and explore new ideas.</li>
            <li>Action-Oriented: Don't just dream, actively work to make things happen.</li>
          </ul>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => setShowHobbies(!showHobbies)}>My hobbies</h2>
        {showHobbies && (
          <div>
            <h3>Passions Beyond the Keyboard</h3>
            <p><strong>Active Lifestyle</strong><br />
              I'm really into fitness. When I hit the gym, I give it my all, especially in my Beat81 classes where I push myself to the limit. It's all about hitting new personal bests in how much I can push my body.</p>

            <p><strong>Food Lover</strong><br />
              I'm a big fan of exploring different foods. Berlin's amazing variety of cuisines and authentic dishes from all over the world always gets me excited. Trying new flavors and dishes is something I really love.</p>

            <p><strong>Coffee Enthusiast</strong><br />
              Two years ago, a single espresso in Italy, Rome turned me into a serious coffee lover. Since then, I've been exploring different coffee beans from all over the world. I even got myself a coffee machine to make the perfect cup. I'm always on the hunt for the best coffee experience.</p>
          </div>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => setShowCertificates(!showCertificates)}>Certificates</h2>
        {showCertificates && (
          <div>
      <ul>
        <li>Google Cloud Architect</li>
        <li>AWS Solutions Architect Associate</li>
        <li>Azure 900</li>
        <li>Professional Scrum Master 2</li>
      </ul>
          </div>
        )}
      </div>

      <h2>Linkedin</h2>
      <p>Connect With Me</p>
      <p>Would you like to know more about my professional experience? Then visit <a id='linkedin-content' href="https://www.linkedin.com/in/progressivist-tom/">my LinkedIn</a></p>

     
    </div>
  );
}

export default AboutMe;
