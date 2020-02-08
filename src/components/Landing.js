import React from "react"

class Landing extends React.Component{
    render(){
        return(
            <section id="landing">
                <div className="container-fluid">
                    <div className="row">
                        <div className="landing-wrap">
                            <div className="heading-wrap text-center">
                                <h1 className="animated fadeInUp">Lawless-Barbers</h1>
                                <h5 className="pb-3 animated fadeInUp">est. 2020</h5>
                                <button className="col-12 btn btn-light animated fadeInUp">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Landing