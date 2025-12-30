 import React from 'react'
 import { Link } from 'react-router-dom';
 
 export default function Navbar(props) {
   return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">TextUtils</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link about" to="/about">About</Link>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button  className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
     <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
     <input className="form-check-input" onClick={props.toggleMode} type="checkbox" defaultValue id="checkNativeSwitch" switch="true" />
      <label className="form-check-label" htmlFor="checkNativeSwitch">
        {props.text}
      </label>
     </div>

  </div>
</nav>
   )
 }
 