import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Header from './Header/header.js';
import Menu from './Menu/menu.js';
import Projects from './Projects/projects.js';
import Footer from './Footer/footer.js';
import AboutMe from './AboutMe/about-me.js';
import Imprint from './Imprint/Imprint.js'; // Import the Imprint component

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (projectNumber) => {
    setSelectedProject(projectNumber);
  };

  return (
    <Router>
      <div id='app'>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/imprint" element={<Imprint />} />
        </Routes>
        <Menu onProjectSelect={handleProjectSelect} />
        <Projects project={selectedProject} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
