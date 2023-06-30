import React from 'react'
import { FaBed,FaCoins ,FaBiking} from "react-icons/fa";
import {Link} from 'react-router-dom';
import { GiTeacher} from "react-icons/gi";
import { LuHeartHandshake} from "react-icons/lu";
import { SlPeople} from "react-icons/sl";

function Carrier3() {
  return (
   <>
   <div>
   
   <div className='allIcon'>

    <div  className='iconBox'>
        <FaBed  className='abtIcon'/>
        
        
        <h3> PTO and Sick Pay</h3>
    </div>

    <div  className='iconBox'>
        < FaCoins className='abtIcon'/>
       
        
            <h3> 401K</h3>
    </div>

    <div  className='iconBox'>
        <LuHeartHandshake className='abtIcon'/>
        
        <h3> Medical Benfits</h3>
    </div>
</div>
<div className='allIcon1'>
    <div  className='iconBox'>
        <FaBiking className='abtIcon'/>
       
        <h3> Vehicle Allowence</h3>
         
      
    </div>

    <div  className='iconBox'>
        <GiTeacher  className='abtIcon'/>
        
        <h3> Tranining and development</h3>
    </div>

    <div  className='iconBox'>
        <SlPeople  className='abtIcon'/>
        
        <h3> Quartely Team Events</h3>
    </div>

   </div>

   <Link to='/carrierpage' className='splbtn btn1 '> Current Openings</Link>

   </div>
   
   </>
  )
}

export default Carrier3