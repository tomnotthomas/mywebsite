import React from 'react'
import './footer.css'
import { Link} from 'react-router-dom'

function Footer() {
  return (
   <>
    <div className='footer-menu'>
      <a className='footer-item' href="mailto:tom@forti300.com">Reach out!</a>
      <a className='footer-item' href="https://www.linkedin.com/in/progressivist-tom/">Send me a message on Linkedin</a>
      <a className='footer-item' href="https://www.linkedin.com/in/progressivist-tom/">Imprint</a>

      </div>

    <div id='footer'>
      <div class="wrapper">
        <div class="inner-wrapper">
          <div class="landscape"></div>
       </div>
      </div>
    </div>
    </> 
  )
}

export default Footer