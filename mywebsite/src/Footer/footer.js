import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './footer.css';

function Footer() {
  const scrollToImprint = () => {
    // Scroll to the imprint section after a short delay
    setTimeout(() => {
      const imprintElement = document.getElementById('imprint-background');
      imprintElement.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Adjust the delay as needed
  };

  return (
    <>
      <div className='footer-menu'>
        <a className='footer-item' href="mailto:tom@forti300.com">Reach out!</a>
        <a className='footer-item' href="https://www.linkedin.com/in/progressivist-tom/">Say Hi on Linkedin</a>
        <Link to="/imprint" className='footer-item' onClick={scrollToImprint}>Imprint</Link> {/* Use Link component */}
      </div>

      <div id='footer'>
        <div class="wrapper">
          <div class="inner-wrapper">
            <div class="landscape"></div>
          </div>
        </div>
      </div>
    </> 
  );
}

export default Footer;
