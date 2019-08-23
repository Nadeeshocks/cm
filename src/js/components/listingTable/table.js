import React from 'react';

export default props => {
    const { title, tableHead, gear } = props
    return (
        <div className="content">
            <div className="header">
                <h4> {title} </h4>
                <button onClick = {props.onClick}> 
                    { title == "MY LISTING" && "List Gear" || "Rent Gear" } 
                </button>
            </div>
            <div className="body">
                <div className="body-content">
                    <table>
                        <thead>
                            <tr>
                                {tableHead.map((item, key)=>{
                                   return <th> {item} </th>
                                })}
                            </tr>
                        </thead>
                        <hr />
                        <tbody>
                            <tr>
                                <td> <img src="a.jpg" /> </td>
                                <td>{"Name & Category"}</td>
                                <td>Rental Period</td>
                                <td>Client</td>
                                <td>Price per day</td>
                                <td>Amouth</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
