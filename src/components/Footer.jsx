import React from "react";
import Logo from '../assets/logo.png'

export default function Footer(){

    return(
        <div className="footer" style={{backgroundColor:'#032573', display:"flex",height:'20vh'}}>
            <div className="container">
            <footer className="py-3 my-4">
                <div className="nav justify-content-center border-bottom pb-3 mb-3">
                    <a href="/" className="navbar-brand text-light">
                        <img src={Logo} alt="Logo" width="60" height="50" />
                        URL Rövidités.
                    </a>
                </div>
                <p className="text-center text-light">
                    <a className="text-white" style={{textDecoration:'none'}} href="www.akosdev.hu">akosdev.hu</a>
                </p>
            </footer>
            </div>
        </div>
    )
}