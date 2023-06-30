import React from 'react'
import serprog from './serprog.jpg'
import main from './main.jpg'
import it from './it.jpg'

function Maintain() {
  return (
    <>
    <div  className='  Imple'>
    <h1 className='autoHead  hi'> Maintain</h1>
    <div  className='serviceCards  '>
        
        <div>
    <div className="serviceCard" >
  <img src={serprog} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2> Service Programs</h2>
    <h6 class="card-title">Maintaining your Building Automation
     and Energy Management systems is critical to protecting their useful life.
     <br/> <br/><br/>It is also a crucial part of ensuring they are operating efficiently and per the design requirements.</h6>
     <br/><br/><br/><br/>
  </div>
</div>
</div>
    



<div>
    <div className="serviceCard" >
  <img src={main} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2> Migrations & Upgrades</h2>
    <h6 class="card-title">If you have legacy systems,
     we can help evaluate the need for an upgrade. 
     <br/><br/>Many clients are concerned about the risks to their operations while managing a transition of critical systems, but we identify the path for a smooth transition while highlighting opportunities for cost saving.</h6>
     <br/>
  </div>
</div>
</div>
    



<div>
    <div className="serviceCard" >
  <img src={it} class="card-img-top" alt="..."/>
  <div class="card-body">
    
    <h2> IT & Networking</h2>
    <h6 class="card-title"><br/> <br/>We speak IT & Networking, so you don’t have to. Our team has worked with many IT Departments and helped facilitate conversations around cybersecurity,
     VLAN setups, remote connectivity,<br/><br/> and on-premises vs. cloud server options.</h6>
     <br/><br/><br/>
  </div>
</div>
</div>
    



    </div>

    </div>
    </>
  )
}

export default Maintain