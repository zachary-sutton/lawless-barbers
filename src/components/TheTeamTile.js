import React from "react"

function TheTeamTile(props){
        return(
            <div className="col-12 col-md-8 col-lg-3 tile-container border">
                <img width="100%" src={props.img} alt={props.barberName}/>
                <h3 className="pt-3">{props.barberName}</h3>
                <p>{props.bio}</p>
            </div>
        )
}

export default TheTeamTile