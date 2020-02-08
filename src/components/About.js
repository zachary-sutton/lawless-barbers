import React from "react"

class About extends React.Component{
    render(){
        return(
             <section id="about">
                 <div className="container-fluid">
                     <div className="row text-center d-flex justify-content-center pb-5">
                            <h1 className="col-12 about-heading pt-5">Lawless Barbers</h1>
                            <hr className="hr-about" />
                            <div className="col-12 col-md-8 col-lg-5">
                                <p className="col-12">
                                    Lawless Barbers is a traditional barbershop and male grooming 
                                    brand located in Birmingham, England.
                                </p>
                                <p className="col-12">
                                    We provide a simple, varied barbering service list for all
                                    gents hairstyles and preferences (long and short). 
                                    Please view our services for pricing scheme. 
                                </p>
                                <p className="col-12">
                                    Lawless barbers are specialist in men’s hair 
                                    and suppliers of Birmingham's best-loved hairstyling range. 
                                    It is our job to make sure you are looking your best, 
                                    from the neck up, at all times.
                                </p>
                            </div>
                     </div>
                 </div>
             </section>
        )
    }
}

export default About