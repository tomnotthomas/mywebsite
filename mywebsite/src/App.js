import React, { useState } from 'react';
import './App.css';
import Header from './Header/header.js';
import Menu from './Menu/menu.js';
import Projects from './Projects/projects.js';
import Footer from './Footer/footer.js';
import AboutMe from './AboutMe/about-me.js';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (projectNumber) => {
    setSelectedProject(projectNumber);
  };

  return (
    <div id='app'>
      <Header />
      <AboutMe />
      <Menu onProjectSelect={handleProjectSelect} />
      <Projects project={selectedProject} />
      <Footer />
    </div>
  );
}

export default App;