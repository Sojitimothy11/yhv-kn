import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Blog from './Blog'

const Navbar = () => {
  return (
  
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#"><img src={'https://res.cloudinary.com/dxrxekidt/image/upload/v1688846476/logo_200x200_t4gvby.png'} width='40px'/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="Home" className="nav-link " href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="Market" className="nav-link" href="#">Marketing</Link>
          </li>
          <li className="nav-item">
            <Link to="About" className="nav-link" href="#">Aboutus</Link>
          </li>
          <li className="nav-item">
            <Link to="Carousel" className="nav-link " href="#">Testimonial</Link>
          </li>
           <li className="nav-item">
            <Link to="Blog" className="nav-link " href="#">Blog</Link>
          </li> 
          
        </ul>
      </div>
    </div>
  </nav>
  
    </div>
    
  )
}

export default Navbar