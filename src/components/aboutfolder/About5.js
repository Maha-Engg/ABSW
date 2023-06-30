import React from 'react'
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaMedal} from "react-icons/fa";
import { AiOutlineLineChart} from "react-icons/ai";
import { BsEmojiSmile} from "react-icons/bs";
import { LuHeartHandshake} from "react-icons/lu";
import { SlPeople} from "react-icons/sl";

function About5() {
  return (
   <>
   
   <div className='allIcon'>

    <div  className='iconBox'>
        <HiOutlineLightBulb  className='abtIcon'/>
        
        <h4 className='h4'>Challenge the status quo <br/>
        by finding a better way to 
        <br/>get things done</h4>
        <h3> Innovation</h3>
    </div>

    <div  className='iconBox'>
        <FaMedal className='abtIcon'/>
       
        <h4 className='h4'>Exceed expectations and take
            <br/> pride in everything we do</h4>
            <h3> Excellence</h3>
    </div>

    <div  className='iconBox'>
        <AiOutlineLineChart className='abtIcon'/>
        <h4 className='h4'>Invest in each other by finding
            <br/> opportunities for development 
            <br/>and improvement</h4>
        <h3> Growth</h3>
    </div>
</div>
<div className='allIcon1'>
    <div  className='iconBox'>
        <BsEmojiSmile className='abtIcon'/>
        <h4 className='h4'>Clear and honest 
            <br/>communication is fundamental
            <br/> to our working relationships</h4>
        <h3> Transparency</h3>
         
      
    </div>

    <div  className='iconBox'>
        <LuHeartHandshake  className='abtIcon'/>
        <h4 className='h4'> Believe in a diverse, 
            <br/>equitable, and <br/>
            inclusive culture</h4>
        <h3> Inclusion</h3>
    </div>

    <div  className='iconBox'>
        <SlPeople  className='abtIcon'/>
        <h4 className='h4'> Demonstrate a commitment 
            <br/>to working together</h4>
        <h3> TeamWork</h3>
    </div>
   </div>
   
   </>
  )
}

export default About5