import React,{useState} from 'react';
import logo6 from '../images/logo6.jpg'
import {Link} from 'react-router-dom';
const Navbar =()=>{
    const [nav,setNav]=useState(false);

    const changeBackground =()=>{
    if(window.scrollY >=50){
        setNav(true);
    }
    else{
        setNav(false);
    }

    }
    window.addEventListener('scroll',changeBackground);
return <>
   

   <nav className={nav ? "nav active" : "nav"}>
    <Link to='/'  smooth={true} duration={1000}>
        <img src={logo6} className='logo' alt='/'></img>
    </Link>
   <input className='menu-btn' type='checkbox' id='menu-btn'/>
   <label className='menu-icon' htmlFor='menu-btn'>
    <span className='nav-icon'></span>
   </label>
   <ul className='menu'>
    <li><Link to='/'  className='color' smooth={true}  duration={1000}>Home</Link></li>
    <li><Link to='/about' className='color' smooth={true} duration={1000} >About</Link></li>
    <li><Link to='/automation' className='color' smooth={true} duration={1000} >Solutions</Link></li>
    <li><Link to='/service'  className='color' smooth={true} duration={1000} >Services</Link></li>
    <li><Link to='/market' className='color' smooth={true} duration={1000} >Markets</Link></li>
    <li><Link to='/carrier' className='color' smooth={true} duration={1000} >Careers</Link></li>
    <li><Link to='/contact'  className='color' smooth={true} duration={1000} >Contact</Link></li>
   </ul>
   
   </nav>


</>

}

export default Navbar;































