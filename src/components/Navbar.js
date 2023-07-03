import React from "react";
import PropTypes from 'prop-types'
// import {  Link } from "react-router-dom";

function Navbar(props) {
 
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} py-2`}>
      <div className="container-fluid">
        <a className={`navbar-brand heading text-${props.mode==="light"?"black":"white"}`} >{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${props.mode==="light"?"black":"white"}`} aria-current="page" >{props.about}</a>
            </li>
         

          </ul>

          <div className="form-check form-switch">
            <input onClick={props.toggleMode}  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label  text-${props.mode==="light"?"black":"white"}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>

        </div>
      </div>
    </nav>
  )
}

//exporting components
export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
};





//these Are the default Props values.....
Navbar.defaultProps = {
  title: 'Not Set',
  about: 'Not Set'
}