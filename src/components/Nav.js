import React from "react"
import Logo from "../imgs/logo.png"

class Nav extends React.Component {
    render(){
        return(
            <section className="animated fadeInDown" id="nav">
                <nav className="navbar navbar-expand-md navbar-dark">

                    <a href="#home" className="navbar-brand">
                        <img src={Logo} width="50px" alt="Lawless Barbers Logo"/>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#content">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#the-team">The Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#opening-hours">Opening Hours</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        )
    }
}

export default Nav