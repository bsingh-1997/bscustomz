import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import mainlogo from './bsc ogo.png'
import './header.css'
export default function header({ setSearchQuery ,searchbar }) {

  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    }

  return (
    <div>
      <div style={{padding:"0.2rem .5rem 0 .5rem"}}>
        <nav className="navbar navbar-expand-lg bg-light " >
  <div className="container-fluid">
      {/* <img src={mainlogo} /> */}
    {/* <a className="navbar-brand" href="/"> BsCustomz</a> */}
    <a className="navbar-brand" href="/"><img style={{height:'8vh'}} src={mainlogo} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact us</Link>
        </li>
        
      </ul>
      
      {searchbar && 
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" onChange={handleSearchChange} aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      }
    </div>
  </div>
</nav>
      </div>
    
    </div>
  )
}
  