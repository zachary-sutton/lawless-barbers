import React from "react"

function ContentTile(props){
        return(
            <div className="col-12 col-md-6 col-lg-4 mb-5 mt-5">
                <div>
                    <h3 className="service-title">{props.service}</h3>
                    <p className="p-text">Duration: {props.duration}</p>
                    <h5 className="service-price">{props.price}</h5>
                    <button className="col-8 service-btn btn btn-danger">BOOK NOW</button>
                </div>
            </div>
        )
}

export default ContentTile