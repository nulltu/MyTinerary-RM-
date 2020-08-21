import React from "react";
import { Footer } from "react-materialize";
import logo from '../images/logo.svg'
import { NavLink } from "react-router-dom";

function TheFooter() {
  return (
    <>
      <Footer
        className="footer-principal"
        links={
          <ul>
            <li>
              <NavLink className="link-footer" to="">
                Link 1
              </NavLink>
            </li>
            <li>
              <NavLink className="link-footer" to="">
                Link 2
              </NavLink>
            </li>
            <li>
              <NavLink className="link-footer" to="">
                Link 3
              </NavLink>
            </li>
          </ul>
        }
        moreLinks={
          <NavLink className="link-footer right" to="">
            
          </NavLink>
        }
      >
        <NavLink id="logo" className="brand-logo" to=""><img className="logo-principal-footer" src={logo} alt="logo-footer"></img></NavLink>
      </Footer>
    </>
  );
}

export default TheFooter;