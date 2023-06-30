import React from 'react'
import serv from './serv.jpg'
import serv2 from './serv2.jpg'
import serv1 from './serv1.jpg'

function Service2() {
  return (
    <>
    <div  className='  Imple '>
    <h1 className='autoHead hi ' > Design</h1>
    <div  className='serviceCards'>
        
        <div>
    <div className="serviceCard" >
  <img src={serv} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2> Engineering</h2>
    <h6 class="card-title">We offer full Building Automation and
     Energy Management system engineering 
    services. From simple product and sensor 
    selections to fully engineered submittals,
    <br/> we can provide you with a package from 
    multiple manufacturers.</h6>
    
  </div>
</div>
</div>
    



<div>
    <div className="serviceCard" >
  <img src={serv1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2> Facility Standards</h2>
    <h6 class="card-title">If you have a mixture of systems 
    implemented by different vendors,
    <br/>
    <br/><br/> we can 
    help define a set of Building Automation 
    and Energy Management standards that
     govern all aspects of your system.</h6>
    
  </div>
</div>
</div>
    



<div>
    <div className="serviceCard" >
  <img src={serv2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2> RFP Development</h2>
    <h6 class="card-title">We work with clients that need a new or 
    improved system but don’t have the resources to formalize that request in a bid process. We have experience assessing facilities, developing requirements with owners, and then turning those requirements 
    into an RFP that can be competitively procured.</h6>
    
  </div>
</div>
</div>
    



    </div>
    </div>

    </>
  )
}

export default Service2