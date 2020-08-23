import React from "react";
import logo from '../images/logo.svg'
import "../styles/header.css";
import imgProfile from '../images/profile.svg'
import Message from "./Message";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <>

      <div className="container-message container-fluid">
        <nav className="nav-wraper" role="navigation">
          <img className="logo-principal brand-logo" src={logo} alt="img-logo"/>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="">Link2</NavLink></li>
            <li><NavLink to="">Link3</NavLink></li>
            <li>
              <a className="dropdown-trigger img-profile-ref" data-target="dropdown1"><img className="img-profile" src={imgProfile} alt="img-profile"></img></a>
            </li>
          </ul>
          <ul id="nav-mobile" className="sidenav">
            <li><NavLink to="">Link1</NavLink></li>
            <li><NavLink to="">Link2</NavLink></li>
            <li><NavLink to="">Link3</NavLink></li>
          </ul>
          <ul id="dropdown1" className="hover dropdown-content">
            <li><NavLink to="">Login</NavLink></li>
            <li><NavLink to="">Create Account</NavLink></li>
          </ul>
          <NavLink to="" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons icon-menu">menu</i></NavLink>
        </nav>
        <Message />
      </div>
    </>
  );
}

export default Header