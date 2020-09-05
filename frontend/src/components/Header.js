import React from "react";
import logo from '../images/logo.svg'
import "../styles/header.css";
import imgProfile from '../images/profile .svg'
import { NavLink, Link } from "react-router-dom";
import { Dropdown, Icon, Navbar, Divider } from 'react-materialize'

 const Header = () =>{

  return(
      <>
      <div style={{display:'flex'}}>
      <Navbar
  alignLinks="right"
  brand={<Link className="brand-logo" to="/"><img src={logo} alt=""/></Link>}
  centerChildren
  id="mobile-nav"
  menuIcon={<Icon className="icon__menu">menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <NavLink to="/" className="navLink__header">
    Home
  </NavLink>
  <NavLink to="" className="navLink__header">
    Link 2 
  </NavLink>
  <NavLink to="" className="navLink__header">
    Link 3 
  </NavLink>
  <NavLink to="" className="navLink__header">
    Link 4 
  </NavLink>
</Navbar>
<Dropdown
  id="Dropdown_6"
  options={{
    alignment: 'left',
    autoTrigger: true,
    closeOnClick: true,
    constrainWidth: true,
    container: null,
    coverTrigger: false,
    hover: false,
    inDuration: 150,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 250
  }}
  trigger={<img className="img__profile" src={imgProfile} alt=""/>}
>
  <NavLink to="/SignIn">
    Login
  </NavLink>
  <NavLink to="/signUp">
    Create Acoount
  </NavLink>
  <Divider />

</Dropdown>

      </div>
      
      </>
  )
 }
export default Header