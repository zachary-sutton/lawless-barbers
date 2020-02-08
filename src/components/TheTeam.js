import React from "react"
import TheTeamTile from "./TheTeamTile"
import theTeamData from "./theTeamData"

class TheTeam extends React.Component{
    render(){

        const theTeamItem = theTeamData.map(item => <TheTeamTile key={item.id} barberName={item.barberName} bio={item.bio} img={item.img}/>)

        return(
            <section id="the-team">
                <div className="container-fluid">
                    <h1 className="text-center pt-5 pb-5"><u>Meet The Team</u></h1>
                    <div className="row d-flex justify-content-around text-center pb-5">
                        {theTeamItem}
                    </div>
                </div>
            </section>
        )
    }
}

export default TheTeam