import React from "react";
import logo from '../images/logo.svg'
import "../styles/header.css";
import imgProfile from '../images/profile .svg'
import { NavLink, Link } from "react-router-dom";
import { Dropdown, Icon, Navbar, Divider } from 'react-materialize'
import { connect } from "react-redux";


 const Header = (props) =>{



  return(
      <>
      <div style={{display:'flex'}}>
      <Navbar
          alignLinks="right"
          brand={<Link className="brand-logo" to="/"><img src={logo} alt="" /></Link>}
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
          <NavLink to="/" className="navLink__header">Home</NavLink>
          <NavLink to="cities" className="navLink__header">Cities</NavLink>
          <NavLink to="" className="navLink__header">Link 3</NavLink>
          <NavLink to="" className="navLink__header">link 4</NavLink>
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
          trigger={props.token ? <img className="img__profile__userLogin" src={props.photoProfile} alt="" /> : <img className="img__profile" src={imgProfile} alt="" />}
        >
          {props.token ? <NavLink to="/logout">Logout</NavLink> : <NavLink to="/signIn">SignIn</NavLink>}
          {props.token ? <NavLink to="/">My Account</NavLink> : <NavLink to="signUp">Create Account</NavLink>}
        </Dropdown>

      </div>
      
      </>
  )
 }

 const mapStateToProps = state => {
  return {
    photoProfile : state.user.photoProfile,
    username : state.user.username,
    token: state.user.token
  }
}
export default connect(mapStateToProps)(Header)