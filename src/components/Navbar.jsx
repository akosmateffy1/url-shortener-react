import React from "react";
import Logo from '../assets/logo.png'

export default function Navbar(){

    return(
        <div className="navbar" style={{backgroundColor:'#032573'}}>
            <div className="container-fluid">
                <a href="/" className="navbar-brand text-light">
                    <img src={Logo} alt="Logo" width="60" height="50" />
                    URL Rövidités.
                </a>
            </div>
        </div>
    )
}