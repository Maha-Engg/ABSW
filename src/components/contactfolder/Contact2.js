import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { BsEnvelope, BsPhoneFlip,BsLinkedin } from "react-icons/bs";

function Contact2() {
  return (
    <>
    <div>
    <div className='contactVia'>
   
   
    <div className='box'> 
        <h6> <CiLocationOn className='icon'/>  Location</h6>
        <p> abc...efg...xyz,
            <br/> india
        </p>
    
    </div>
    

   
        <div className='box'>
            <h6> <BsEnvelope className='icon'/>  Email</h6>
            <p>info987@gmail.com</p>
        </div>
    

   
        <div className='box'>
            <h6> <BsPhoneFlip className='icon'/>  Call</h6>
            <p>8976543210</p>
        </div>
   

    
        <div className='box'>
            <h6> <BsLinkedin className='icon'/> Linkedin</h6>
            <p>company profile</p>
        </div>
    

  </div>



   </div>
    
    </>
  )
}

export default Contact2