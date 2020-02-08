import React from "react"
import Uppercut from "../imgs/uppercut.png"

class Parallax extends React.Component{
    render(){
        return(
            <section id="parallax">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center content-wrap">
                            <h1 className="col-12 parallax-title">Partnered with..</h1>
                            <img className="partner-logo pb-4" src={Uppercut} alt="Uppercut Logo"/>
                            <a className="parallax-text" href="#home">                            
                                <h5>Shop Now</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Parallax