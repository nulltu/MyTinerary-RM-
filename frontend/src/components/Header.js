import React from "react";
import logo from '../images/logo.svg'
import "../styles/header.css";
import imgProfile from '../images/profile.svg'
import Message from "./Message";
import { NavLink } from "react-router-dom";
import { Dropdown, Button, Icon, SideNav, SideNavItem, Navbar, NavItem, Divider } from 'react-materialize'


class Header extends React.Component {

  state= {
    viewMessage:false
  }

  changeStateComponents = ()=>{
    this.setState({
      viewMessage:!this.state.viewMessage
    })
  }

render(){
  return (
    <>
      <div className="container-message container-fluid">
        <Navbar className="nav-principal"
          alignLinks="right"
          brand={<a className="brand-logo" href="#"><img className="logo-principal brand-logo" src={logo} alt="img-logo" /></a>}
          id="mobile-nav"
          menuIcon={<Icon className="icon-menu">menu</Icon>}
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
          <NavLink to="/">
            Home
  </NavLink>
          <NavItem href="">
            Link 2
  </NavItem>
          <NavItem href="">
            Link 3
  </NavItem>
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
            trigger={<a href="#!">{' '}<img className="img-profile" src={imgProfile} alt="img-profile"></img></a>}
          >
            <NavLink to="">Login</NavLink>
            <NavLink to="">Create account</NavLink>
          </Dropdown>
        </Navbar>
        <Message />
      </div>
    </>
  )
}
}

export default Header