import React from 'react';

import Home from './components/Home'
import About from './components/About'
import Solutions from './components/Solutions'
import Why from './components/Why'
import What from './components/What'
import Project from './components/Project'
import Footer from './components/Footer'
// import {BiSolidUpArrowSquare} from 'react-icons/bi'
// import {BsFillArrowDownSquareFill} from 'react-icons/bs'
// import {Link} from 'react-router-dom'
import './App.css'
function Fronthome() {
  return (
    <>
    
    
    <Home/>
    <About/>
    <Solutions/>
    <Why/>
    <What/>
    <Project/>
    {/* <Link to='/' className='arowu '> < BiSolidUpArrowSquare/> </Link>
    <Link to='/' className='arowu anibtn'> < BiSolidUpArrowSquare/> </Link>
     */}
    <Footer/>
    
    </>
  );
}

export default Fronthome;
