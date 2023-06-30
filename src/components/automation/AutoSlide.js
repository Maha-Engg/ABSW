import React from 'react'
import { Link } from 'react-router-dom'

function auto3() {
  return (
    <div className='autoSlides'>
        <h1 className='autoHead slideleft'> Do you need help in any of these areas? </h1>



        <div>

        <div id="carouselExampleAutoplaying" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        


    <div class="col" className='container autoImage'>
    <div class="card h-100">
      
      <div className="content">
      <h4>installation system</h4>
       <h4>project scope</h4>
      <h4>scheneider Electric continum to ecostructure upgrade</h4>
      <h4>scheneider Electric continum to ecostructure upgrade</h4>
    
      </div>
      <div class="card-body">
        <h5 class="card-title">Building  Automation System ( BAS )</h5>
        <p class="card-text">scheneider Electric continum to ecostructure upgrade</p>
      </div>
      
    </div>
  
</div>




    </div>
    <div class="carousel-item">
    <div class="col" className='container autoImage'>
    <div class="card h-100">
     
      <div className="content">
      <h4>installation system</h4>
       <h4>project scope</h4>
      <h4>scheneider Electric continum to ecostructure upgrade</h4>
      <h4>scheneider Electric continum to ecostructure upgrade</h4>
    
      </div>
      <div class="card-body">
        <h5 class="card-title">Building  Automation System ( BAS )</h5>
        <p class="card-text">scheneider Electric continum to ecostructure upgrade</p>
      </div>
      
    </div>
  

  
</div>

    </div>
    <div class="carousel-item">
    <div class="col" className='container autoImage'>
    <div class="card h-100">
      
      <div className="content">
      <h4>installation system</h4>
       <h4>project scope</h4>
      <h4>scheneider Electric continum to ecostructure upgrade</h4>
      <h4>scheneider Electric continum to ecostructure upgrade</h4>
    
      </div>
      <div class="card-body">
        <h5 class="card-title">Building  Automation System ( BAS )</h5>
        <p class="card-text">scheneider Electric continum to ecostructure upgrade</p>
      </div>
      
    </div>
  
</div>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




        </div>

        <Link  to='/contact' className='conbtn anibtn'>Contact</Link>
    </div>
  )
}

export default auto3