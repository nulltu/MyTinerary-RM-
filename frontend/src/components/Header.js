import React from "react";
import logo from '../images/logo.svg'
import "../styles/header.css";
import imgProfile from '../images/profile.svg'
import Message from "./Message";
import { NavLink, Link } from "react-router-dom";
import { Dropdown,Icon,Navbar, NavItem, Button, Divider} from 'react-materialize'


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
      <div className="nav__performance">
      <div>
        <img src={logo} alt=""/>
      </div>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cities">Cities</NavLink>
          <NavLink to="/signIn">SignIn</NavLink>
          <NavLink to="/signUp">SignUp</NavLink>
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
        </ul>

 
        
      </div>


      {/* <div className="container-message container-fluid">
        <Navbar className="nav-principal"
          alignLinks="right"
          brand={<Link className="brand-logo" to="/"><img className="logo-principal brand-logo" src={logo} alt="img-logo" /></Link>}
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
          <NavLink className="link__nav" to="/">
            Home
          </NavLink >
          <NavLink className="link__nav" to="">
            Link2
        </NavLink>
          <NavItem className="link__nav" to="">
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
            <NavLink to="/signIn">Login</NavLink>
            <NavLink to="/signUp">Create account</NavLink>
          </Dropdown>
        </Navbar>
        <Message />
      </div> */}
    </>
  )
}
}

export default Header