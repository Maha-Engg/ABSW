import React from 'react'
import environment from '../images1/environment.jpg'
import chess from '../images1/chess.jpg'
import office from '../images1/office.jpg'
import logo from '../images/logo.jpg'
import logo1 from '../images/logo1.png'
import {Link} from 'react-router-dom'

function Solutions() {
  return (
    <>
    
    <section className='solutions'>
        <div>
            <div className='solution '>
                <div>
                <h2 className='slideright'>solutions</h2>
               <h1 className='slideright'> Delivering Quality</h1>
             <p className='slideright'>
              Our expertise is in the delivery of Building Automation and Energy <br/>
              Management systems. As an integrator, we source solutions that are suited <br/>
              to the specific requirements of your facility. We start with your objectives and <br/> base the design on products that help meet your goals.

              <br/><br/>Whether you need a new design, complete migration, or maintenance of <br/> your existing systems, we are ready to help.
              </p>
                </div>
                <div>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carousel-fade">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={chess} class="d-block slideimg " alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={environment} class="d-block slideimg " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={office} class="d-block slideimg " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>

            </div>

        </div>

        <div class="card1">
          <div class="card" >
            <img src={logo} class="card-img-top" className='image'  alt="..."/>
            <h5 className='high slideright'>Automation</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" className='slideright'>  Building Automation Systems</li>
              <li class="list-group-item" className='slideright'>Laboratory Airflow Controls</li>
              <li class="list-group-item" className='slideright'>Environmental Monitoring Systems</li>
              <li class="list-group-item" className='slideright'>Process Control Systems</li>
            </ul>
            <div class="card-body">
              <Link to="/about" class="card-link" className='button'>Learn More</Link>
               </div>
          </div>

          <div class="card" >
            <img src={logo1} class="card-img-top"  className='image' alt="..."/>
            <h5 className='high slideright' >Energy</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" className='slideright'>  Power Metering</li>
              <li class="list-group-item" className='slideright'>Power Quality</li>
              <li class="list-group-item" className='slideright'>Energy Dashboards</li>
              <li class="list-group-item" className='slideright'>Retro-Commissioning</li>
            </ul>
            <div class="card-body">
              <p href="#" class="card-link" className='button'>Learn More</p>
               </div>
          </div>
        </div>

    </section>
    
    </>
  )
}

export default Solutions