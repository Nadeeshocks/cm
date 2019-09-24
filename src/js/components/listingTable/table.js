import React from 'react';
import Empty from '../empty/empty'

export default props => {
    const { title, tableHead, gears } = props;

    return (
        <div className="content">
            <div className="header">
                <h4> {title} </h4>
                <button onClick={props.onClick}>
                    {title == "MY LISTING" && "List Gear" || "Rent Gear"}
                </button>
            </div>
            <div className="body">
                {gears == null ? <h4>Loading </h4> : gears.length == 0 ? <Empty /> : <div className="body-content">
                    <table>
                        <thead>
                            <tr>
                                {tableHead.map((item, key) => {
                                    return <th> {item} </th>
                                })}
                            </tr>
                        </thead>
                        <hr />
                        <tbody>

                            {gears.map((item, key) => {
                                // item.data().userRef.collection("users").get().then(
                                //         ( res ) => {
                                //                 console.log("yo ", res.data() )  
                                //         }
                                // )
                                const { Photo, PricePerDay, Client, user, Amount, Brand, Model, RentPeriodStart, RentPeriodEnd } = item.data()

                                const startDate = RentPeriodStart.toDate().toString().split(" ")
                                const endDate = RentPeriodEnd.toDate().toString().split(" ")

                                return (
                                    <tr>
                                        <td> <img src={Photo} /> </td>
                                        <td>{Brand + " " + Model}</td>
                                        <td>{startDate[1] + startDate[2] + startDate[3] + " - " + endDate[1] + endDate[2] + endDate[3]}</td>
                                        <td>{title == "MY LISTING" ? Client : user}</td>
                                        <td>{PricePerDay}</td>
                                        <td>{Amount}</td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </table>
                </div>}
            </div>
        </div>
    )
}
