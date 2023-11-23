import React from 'react'
import {  NavLink } from 'react-router-dom'
import "./header.css"
function Header() {
  return (
    <>
    <nav id='navStyle' className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">danialDev</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ms-5">
          <NavLink to="/" className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} >Home</NavLink>
        </li>
        <li className="nav-item ms-3">
          <NavLink to="/todo"  className={(navData) => navData.isActive ? "nav-link navNav active" : "navNav nav-link"} >todo</NavLink>
        </li>
        
    
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Header
