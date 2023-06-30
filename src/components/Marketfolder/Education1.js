import React from 'react'
import edu from './edu.jpg'
import { BsFillBuildingFill } from "react-icons/bs";
import { BsBuildingX} from "react-icons/bs";
import { PiBuildingsDuotone} from "react-icons/pi";
import { TbBuilding} from "react-icons/tb";
import { TbBuildingStore} from "react-icons/tb";
import { TbBuildingEstate} from "react-icons/tb";

function Education1() {
  return (
   <>
   <div>

    <div className='life'>
        <div className='imgbox'>
        <img src={edu} className='boxphoto zoomimg' alt='...'/>
        </div>
        <div className='lifeTxt'>
            <h2> Higher Education</h2>
            <h4> 
            We work at Higher Education campuses
            <br/> that are essential to the development
            <br/>  of future generations. Our solutions 
            <br/> create environments that enable faculty
            <br/>  and students to be successful. We also 
            <br/> understand the challenges of constructing 
            <br/> and maintaining a campus environment while
            <br/>  navigating staffing and budget limitations.
            </h4>


        </div>

        


    </div>


    <div className='allIcon'>

<div  className='iconBox'>
    <BsFillBuildingFill  className='abtIcon'/>
    
    <h4 className='h4'>Drive more process awareness
    <br/>across your Staff with one way<br/>
     monitoring
     pg critical equipment <br/>and address excursion<br/>
       from set point earlier
    </h4>
    <h3> isolation opearing room</h3>
</div>

<div  className='iconBox'>
    <BsBuildingX className='abtIcon'/>
   
    <h4 className='h4'>
    Drive more process awareness
    <br/>across your Staff with one way<br/>
     monitoring
     pg critical equipment <br/>and address excursion<br/>
       from set point earlier
    </h4>
        <h3> Research Lab Strategies</h3>
</div>

<div  className='iconBox'>
    <PiBuildingsDuotone className='abtIcon'/>
    <h4 className='h4'>Invest in each other by finding
        <br/> opportunities for development 
        <br/>and improvement</h4>
    <h3>  Environmental monitoring</h3>
</div>
</div>
<div className='allIcon1'>
<div  className='iconBox'>
    <TbBuilding className='abtIcon'/>
    <h4 className='h4'>Clear and honest 
        <br/>communication is fundamental
        <br/> to our working relationships</h4>
    <h3> Residential integration</h3>
     
  
</div>

<div  className='iconBox'>
    <TbBuildingStore  className='abtIcon'/>
    <h4 className='h4'> Believe in a diverse, 
        <br/>equitable, and <br/>
        inclusive culture</h4>
    <h3> campus level integration</h3>
</div>

<div  className='iconBox'>
    <TbBuildingEstate  className='abtIcon'/>
    <h4 className='h4'> Demonstrate a commitment 
        <br/>to working together</h4>
    <h3> Life cycle Planning</h3>
</div>
</div>

   </div>
   
   </>

  )
}

export default Education1