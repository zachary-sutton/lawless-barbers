import React from "react"

class Connect extends React.Component{
    render(){
        return(
            <section id="connect">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center pt-3">
                        <a href="#home" target="_blank">
                            <i className="fab fa-facebook fa-lg icon pr-3"></i>
                        </a>
                        <a href="#home" target="_blank">
                            <i className="fab fa-twitter fa-lg icon pr-3"></i>
                        </a>
                        <a href="#home" target="_blank">
                            <i className="fab fa-instagram fa-lg icon"></i>
                        </a>
                    </div>
                    <div className="row">
                        <p className="col-12 text-center socket">ZNS DEV 2020&copy;</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Connect