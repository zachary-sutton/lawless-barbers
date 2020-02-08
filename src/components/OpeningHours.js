import React from "react"

class OpeningHours extends React.Component{
    render(){
        return(
            <section className="pt-5 pb-5" id="opening-hours">
                <div className="container-fluid">
                    <div className="row">
                        <table className="col-12 text-center table table-borderless">
                            <tbody>
                                <tr>
                                    <th>Day</th>
                                    <th>Opening</th>
                                    <th>Closing</th>
                                </tr>
                                <tr>
                                    <td>Monday</td>
                                    <td>Closed</td>
                                    <td>Closed</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>09:00</td>
                                    <td>17:00</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>09:00</td>
                                    <td>17:00</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>09:00</td>
                                    <td>18:30</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>09:00</td>
                                    <td>19:30</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>09:00</td>
                                    <td>17:00</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>09:00</td>
                                    <td>17:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}

export default OpeningHours