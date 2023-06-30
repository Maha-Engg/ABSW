import React from 'react'
import about from '../images1/about.jpg'

import {Link} from 'react-router-dom'

function About() {
  return (
   <>
   
   
   <section className="about"  >
        <div className="about-content">
          <h3 className='slideright' >About</h3>
          <h2 className='slideright'>The <span class="color1">Automation </span >and <span class="color1">Energy</span> Company</h2>
          <p className='slideright'>ABS Concepts is a Building Automation and Energy Management<br/> Systems Integrator based in Irvine, California. We develop solutions <br/>to help our clients operate their critical systems, enabling them to <br/>focus on their core business.

          <br/><br/> We have extensive industry experience and are passionate about <br/>providing quality service. We operate as a Licensed Contractor (C-10)<br/> and are a registered Small Business Enterprise (SBE).</p>
          <Link to="/about" class="button anibtn">Get Started</Link>
          <img src={about} class="abtimg" alt="about"/>
        </div>
      </section>
      
   </>
  )
}

export default About