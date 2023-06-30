import React from 'react'
// import illusion1 from '../images1/illusion1.jpg'
import ai from '../images1/ai.jpg'
import Navbar from './Navbar'
import creative from '../images1/creative.jpg'
import medical2 from '../images1/medical2.jpg'
import {Link} from 'react-router-dom'
function Home() {
  return (
   <>

<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
<Navbar/>
  <div class="carousel-inner carousel-fade ">
    <div class="carousel-item active">
      <img src={ai} className='slideimg' class="d-block w-100" alt="..."/>
      <div className='slide1'>
      

                    <h1 className='slideright'>designing <span class="highlite">automation</span> and<br/> <span class="highlite">energy</span> solutions</h1>
                    <h5 className='slideright'>Transforming Life Science Environments,
                    <br/>enabling the development of life saving drugs <br/>brand medical devices</h5>
                    <br/> <Link className='splbtn' to='/solution'> Learn More</Link><br/><br/>
                    <Link className='splbtn' to='/contact'> Contact Us</Link>
                  
                  </div>
    </div>
    <div class="carousel-item">
      <img src={creative}  className='slideimg' class="d-block w-100" alt="..."/>
      <div className='slide2'>
                    <h1 className='slideright'>implementation <span class="highlite2">automation &nbsp; &nbsp;</span>   and<br/> <span class="highlite2">energy</span> solutions</h1>
                    <h5 className='slideright'>Enhancing higher education campuses,<br/>preparing future generations for success
                    </h5><br/><br/>
 
                    <Link className='splbtn' to='/solution'> Learn More</Link><br/><br/>
                     <Link className='splbtn' to='/contact'> Contact Us</Link>
                  </div>
    </div>
    <div class="carousel-item">
      <img src={medical2} className='slideimg' class="d-block w-100" alt="..."/>
      <div className='slide3'>
                    <h1 className='slideright '>maintaining <span class="highlite3">automation</span> and<br/> <span class="highlite3">energy</span> solutions</h1>
                    <h5 className='slideright'> improving healthcare facilities,<br/>
                         ensuring medical profissionals are able to <br/>provide the best possible care</h5>
                         
                         <Link className='splbtn anibtn' to='/solution'> Learn More</Link><br/><br/>
                          <Link className='splbtn  anibtn' to='/contact'> Contact Us</Link>
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
   
   </>
  )
}

export default Home