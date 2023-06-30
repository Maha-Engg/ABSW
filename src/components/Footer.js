import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { BsEnvelope, BsPhoneFlip,BsLinkedin } from "react-icons/bs";
import {Link} from 'react-router-dom'
import logo from '../images/logo5.png'
function Footer() {
  return (
   <>
   <div className='footer'>
    <div className='foot1'>
        <img src={logo} alt='...'/>
        <h2> The automation and
            <br/>Energy company
        </h2>
    </div>
    
    
       <div className='foot2'>
    <h1>Quick Links</h1>
    <ul>
            <li> <Link to='/'  >Home</Link> </li>
                <li> <Link to='/about'    >About</Link> </li>
                <li> <Link to='/solutions'    >Solutions</Link> </li>
                <li> <Link to='/service'    >Services</Link> </li>
                <li> <Link to='/market'    >Markets</Link> </li>
                <li> <Link to='/carier'    >Careers</Link> </li>
                <li> <Link to='/contact'    >Contact</Link> </li>
              
            
    </ul>

   </div>

   <div className='foot3'>
   <h1>Solutions</h1>
    <ul>
              <li><Link to="/automation">Automation</Link></li>
              <li><Link to="/Energy">Energy</Link></li>
  </ul>
  </div>

  <div className='foot4'>
   <h1>Services</h1>
    <ul>
              <li><Link href="/service">Design</Link></li>
              <li><Link href="/service">Implement</Link></li>
              <li><Link href="/service">Maintain</Link></li>
  </ul>
  </div>

  <div className='foot5'>
   <h1> Contact</h1>
   <div>
    <div>
        <h6> <CiLocationOn className='icon'/>  Location</h6>
        <p> abc...efg...xyz,
            <br/> india
        </p>
    </div>
    </div>
    

    <div>
        <div>
            <h6> <BsEnvelope className='icon'/>  Email</h6>
            <p>info987@gmail.com</p>
        </div>
    </div>

    <div>
        <div>
            <h6> <BsPhoneFlip className='icon'/>  Call</h6>
            <p>8976543210</p>
        </div>
    </div>

    <div>
        <div>
            <h6> <BsLinkedin className='icon'/> Linkedin</h6>
            <p>company profile</p>
        </div>
    </div>

  </div>



   </div>
   
   
   </>
  )
}

export default Footer