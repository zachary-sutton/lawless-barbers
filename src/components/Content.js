import React from "react"
import ContentTile from "./ContentTile"
import services from "./servicesData"

class Content extends React.Component{
    render(){

        const servicesItem = services.map(item => <ContentTile key={item.id} service={item.service} duration={item.duration} price={item.price} />)

        return(
            <section id="content">
                <div className="container-fluid">
                    <h1 className="text-center mt-5 content-heading"><u>Services</u></h1>
                    <div className="col-12 col-md-6 mx-auto text-center">
                        <p>At our Lawless Barber Shop we create flattering, 
                            low maintenance hair cuts for men, teenagers and boys who like to look their best.
                        </p>

                        <p>We are experts in precision scissor cutting, clippering, 
                            styling and grooming for men and can create both 
                            classic and on-trend hairstyles for men, including 
                            skin fades, disconnected haircuts, longer hairstyles and beard cuts for gents.
                        </p>
                    </div>
                    <div className="row text-center d-flex justify-content-center pb-5">
                            {servicesItem}
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default Content