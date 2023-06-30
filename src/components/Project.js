import React from 'react'
import illusion2 from '../images1/illusion2.jpg'
import office from '../images1/office.jpg'
import  walk from '../images1/walk.jpg'


function Project() {
  return (
   <>
      <div className='proj'>
   <h1 className='slideright'>Project References</h1>
   <div className='project'>

   


   <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col" className='container'>
    <div class="card h-100">
      <img src={illusion2} class="card-img-top" className='zoomimg' alt="..."/>
      <div className="content">
      <h1>installation system</h1>
    <p> scheneider Electric ecostructure building operation</p>
    <h1>project scope</h1>
    <p> MSTP to IP backbone update</p>
  </div>
      <div class="card-body">
        <h5 class="card-title">higher education
        <br/> classroom building</h5>
        <p class="card-text">scheneider Electric continum to ecostructure upgrade</p>
      </div>
      
    </div>
  </div>
  <div class="col" className='container'>
    <div class="card h-100">
      <img src={walk} class="card-img-top"  className='zoomimg' alt="..."/>
      <div className="content">
    <h1>installation system</h1>
    <p> scheneider Electric ecostructure building operation</p>
    <h1>project scope</h1>
    <p> MSTP to IP backbone update</p>
  </div>
      <div class="card-body">
        <h5 class="card-title">higher education
        <br/> classroom building</h5>
        <p class="card-text">scheneider Electric continum to ecostructure upgrade</p>
      </div>
      
    </div>
  </div>

  <div class="col" className='container'>
    <div class="card h-100">
      <img src={office} class="card-img-top" className='zoomimg' alt="..."/>
      <div className="content">
      <h1>installation system</h1>
    <p> scheneider Electric ecostructure building operation</p>
    <h1>project scope</h1>
    <p> MSTP to IP backbone update</p>
  </div>
      <div class="card-body">
        <h5 class="card-title">higher education
        <br/> classroom building</h5>
        <p class="card-text">scheneider Electric continum to ecostructure upgrade</p>
      </div>
      
    </div>
  </div>
 
</div>






   </div>

   </div>
   
   </>
  )
}

export default Project