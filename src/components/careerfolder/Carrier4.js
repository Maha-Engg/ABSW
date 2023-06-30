import React from 'react'
import{Link} from 'react-router-dom'

function Carrier4() {
  return (
    <>
    
    <div className='resume'>
        <div  className='dialogue'>
            <h1 className='slideright'> Can’t Find Your Dream Job?</h1>
            <h5 className='slideright'> We are always on the lookout for talented individuals<br/> 
                and actively seek different levels of experience <br/> 
                 that will help improve our business.<br/> <br/> <br/> 

If you don’t see an opening that is suitable for you,<br/> 
 please send us your resume so we can stay in touch for the future.</h5>
            </div>

<Link to='/contact' className='splbtn btn2 anibtn'> Send Resume</Link>
    </div>
    
    </>
  )
}

export default Carrier4