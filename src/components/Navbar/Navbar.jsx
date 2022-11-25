import React, { useState } from 'react'
import styled from "./navbar.module.scss"
import { Link,NavLink} from "react-router-dom";
import img from "../../Assets/images/logo-dark.webp"
function Navbar() {

  const navBarStyles=({ isActive })=>{
    return{


      color: isActive ? '#fff' : '#1ABC9C',
      background: isActive ? '#1ABC9C' : 'transparent',
      borderRadius:isActive ? '15px' : '',
      border:isActive ? '2px solid #fff' : '',
      padding:isActive ? '5px' : '',
    }
  }

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3,
             width:200,
        }}
    />
);

  const [NAVBAR, setNAVBAR] = useState(false)

  const ChangeBackGround=()=>{
    if(window.scrollY >= 80){
      setNAVBAR(true)
    }else{
      setNAVBAR(false)
    }
  }
  window.addEventListener("scroll",ChangeBackGround)
  return (
    <div>

<nav className= {NAVBAR ? `${styled.active} navbar navbar-expand-lg fixed-top`: `${styled.navbar_bg} navbar navbar-expand-lg fixed-top`}>
  <div className="container">
    <Link className="navbar-brand" to="/"><img src={img} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="home"
          style={navBarStyles}
          
          >Home</NavLink>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <NavLink className="nav-link active" aria-current="page" to=" "> <i className="fab fa-facebook-f"></i></NavLink>
     
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to=" ">  <i className="fab fa-twitter"></i></NavLink>
       
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to=" "><i className="fab fa-instagram"></i></NavLink>
       
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to =" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa-solid fa-user"></i>
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item " to="" style={navBarStyles}>Register</NavLink></li>
            <li><NavLink className="dropdown-item" to="login" style={navBarStyles}>Login</NavLink></li>
            <li><NavLink className="dropdown-item" to="profile" style={navBarStyles}>Profile</NavLink></li>
            <li><ColoredLine color="white" /></li>
            <li><NavLink className="dropdown-item" to=" " style={navBarStyles}>Logout</NavLink></li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar