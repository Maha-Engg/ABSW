import React from 'react'
import {Link} from 'react-router-dom'

function Why() {
  return (
   <>
   
   <div className='why'>
    <div >

    <h1 className='h1 slideright'>Why ABS Concepts?</h1>
    <br/><br/>
    <h3 className='h3 slideright'>Innovation</h3>
    <h5 className='h5 slideright'>
    Do you have unique system requirements or complicated problems to
    <br/> solve? We develop solutions that are designed to address your specific
    <br/> issue.
    </h5>

    <br/><br/>
    <h3 className='h3 slideright'>Speed</h3>
    <h5 className='h5 slideright'>
    The world moves fast, and our responsiveness is what differentiates us
     <br/> from the competition. We have empowered our team to move quickly,
    <br/> so they are able to respond to your urgent needs.
    </h5>

    <br/><br/>
    <h3 className='h3 slideright'>Quality</h3>
    <h5 className='h5 slideright'>
    We have a deep commitment to excellence. If you are not happy with
     <br/> our delivery, we will do everything to ensure you are satisfied.
    
    </h5>
    <Link  to=' contact' className='button splbtn anibtn'>Contact</Link>

    </div>
   

   </div>
   
   
   </>
  )
}

export default Why