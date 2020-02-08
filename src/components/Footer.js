import React from "react"
import sponsor1 from "../imgs/uppercut.png"
import sponsor2 from "../imgs/wahl.png"

class Footer extends React.Component{
    render(){
        return(
            <section id="footer">
                <div className="container-fluid">
                    <div className="row">
                        <p className="col-12 text-center">ZNS DEV &copy;</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer