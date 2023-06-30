import React from 'react'
import { TbHeartRateMonitor } from "react-icons/tb";
import { LuClipboardSignature} from "react-icons/lu";
import { BiSolidDonateHeart} from "react-icons/bi";
import { MdCoronavirus} from "react-icons/md";
import { HiOutlineScale} from "react-icons/hi";
import { SlPeople} from "react-icons/sl";

function Market3() {
  return (
   <>
   
   <div className='allIcon'>

    <div  className='iconBox'>
        <TbHeartRateMonitor  className='abtIcon'/>
        
        <h4 className='h4'>Drive more process awareness
        <br/>across your Staff with one way<br/>
         monitoring
         pg critical equipment <br/>and address excursion<br/>
           from set point earlier
        </h4>
        <h3> process monitoring</h3>
    </div>

    <div  className='iconBox'>
        <LuClipboardSignature className='abtIcon'/>
       
        <h4 className='h4'>
        Drive more process awareness
        <br/>across your Staff with one way<br/>
         monitoring
         pg critical equipment <br/>and address excursion<br/>
           from set point earlier
        </h4>
            <h3> 21cfr part11 complaince</h3>
    </div>

    <div  className='iconBox'>
        <BiSolidDonateHeart className='abtIcon'/>
        <h4 className='h4'>Invest in each other by finding
            <br/> opportunities for development 
            <br/>and improvement</h4>
        <h3>  Environmental monitoring</h3>
    </div>
</div>
<div className='allIcon1'>
    <div  className='iconBox'>
        <MdCoronavirus className='abtIcon'/>
        <h4 className='h4'>Clear and honest 
            <br/>communication is fundamental
            <br/> to our working relationships</h4>
        <h3> LACS/Fume Hood integration</h3>
         
      
    </div>

    <div  className='iconBox'>
        <HiOutlineScale  className='abtIcon'/>
        <h4 className='h4'> Believe in a diverse, 
            <br/>equitable, and <br/>
            inclusive culture</h4>
        <h3> GMP equipment</h3>
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

export default Market3