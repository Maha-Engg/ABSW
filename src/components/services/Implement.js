import React from 'react'
import licence from './licence.jpg'
import proj from './proj.jpg'
import install from './install.jpg'

function Implement() {
  return (
    <>
    <div  >
    <h1 className='autoHead  '> Implement</h1>
    <div  className='serviceCards  '>
        
        <div>
    <div className="serviceCard" >
  <img src={licence} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2> Licensed Contractor</h2>
    <h6 class="card-title">As a licensed contractor (C-10 Electrical) we provide services that include material procurement,
    <br/><br/><br/>
    <br/> project management, electrical installation,<br/><br/> system programming and startup services.</h6>
    
  </div>
</div>
</div>
    



<div>
    <div className="serviceCard" >
  <img src={proj} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2> Project Management</h2>
    <h6 class="card-title">Undertaking projects presents risk to any organization if not executed properly.
    <br/><br/>We provide project management services for complex system-based projects so your team can focus on their core job functions.</h6>
    
  </div>
</div>
</div>
    



<div>
    <div className="serviceCard" >
  <img src={install} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2> Installation & Commissioning</h2>
    <h6 class="card-title">Every supplier talks about the quality of the work, but we truly deliver.
     Our experience working in government regulated spaces that require exacting hardware and software commissioning means we execute at the highest level.</h6>
    
  </div>
</div>
</div>
    



    </div>

    </div>
    </>
  )
}

export default Implement