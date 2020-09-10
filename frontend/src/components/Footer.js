import React from 'react'
import '../styles/footer.css'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import airbnb from '../images/airbnb.svg'


const Footer = () => {
    return (
        <>

            <div className="footer__app">
                <div>
                    <img className="logo__footer" src={logo} alt="" />
                </div>
              <div style={{display:"flex", alignContent:'space-around'}}>
              <div className="icons__footer">
                        <Link to="/" target="_blank"><img src={instagram} alt="" /></Link>
                        <Link to="/" target="_blank"><img  id="icon__facebook"src={facebook} alt="" /></Link>
                        <Link to="/" target="_blank"><img src={airbnb} alt="" /></Link>
                    </div>
                    <div className="link__footer">
                        <Link to="/">Home</Link>
                        <Link to="cities">Cities</Link>
                    </div>
                  </div>  
              
                  
                </div>
        </>
    )
}

export default Footer