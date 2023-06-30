import React from 'react'
import hospital from './hospital.jpg'
import { CgGhost } from "react-icons/cg";
import { LuClipboardSignature} from "react-icons/lu";
import { BiSolidDonateHeart} from "react-icons/bi";
import { RiStethoscopeFill} from "react-icons/ri";
import { FaBed} from "react-icons/fa";
import { SlPeople} from "react-icons/sl";

function Health1() {
  return (
   <>
   <div>

    <div className='life'>
        <div className='imgbox'>
        <img src={hospital} className='boxphoto zoomimg' alt='...'/>
        </div>
        <div className='lifeTxt'>
            <h2> Healthcare</h2>
            <h4> 
               
            We assist healthcare providers<br/>
             as they protect and save lives.<br/>
              Our team supports the Facilities team<br/>
               so medical professionals can focus on providing care. <br/>
               We deliver traditional construction, design-build<br/>
                and retrofit projects in healthcare facilities and <br/>
                can support all types of integrations that are essential<br/>
                 to running an optimized healthcare facility.
                </h4>


        </div>

        


    </div>


    <div className='allIcon'>

<div  className='iconBox'>
    <CgGhost  className='abtIcon'/>
    
    <h4 className='h4'>Drive more process awareness
    <br/>across your Staff with one way<br/>
     monitoring
     pg critical equipment <br/>and address excursion<br/>
       from set point earlier
    </h4>
    <h3> isolation opearing room</h3>
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
        <h3> joint commision complaince</h3>
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
    <RiStethoscopeFill className='abtIcon'/>
    <h4 className='h4'>Clear and honest 
        <br/>communication is fundamental
        <br/> to our working relationships</h4>
    <h3> OSHPD solution</h3>
     
  
</div>

<div  className='iconBox'>
    <FaBed  className='abtIcon'/>
    <h4 className='h4'> Believe in a diverse, 
        <br/>equitable, and <br/>
        inclusive culture</h4>
    <h3> Patient Room Integration</h3>
</div>

<div  className='iconBox'>
    <SlPeople  className='abtIcon'/>
    <h4 className='h4'> Demonstrate a commitment 
        <br/>to working together</h4>
    <h3> TeamWork</h3>
</div>
</div>

   </div>
   
   </>

  )
}

export default Health1