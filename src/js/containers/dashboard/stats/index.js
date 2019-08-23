import React, { Component } from 'react';
import Chart from '../../../components/dashboard/graph';

class Stats extends Component {

    render() {
        return (
            <React.Fragment>
                <h4> DashBoard </h4>
                <div className="chart-content">

                    <div className="main-box">
                        <Chart />
                        <div className="left-box">
                            <div className="box1">
                                <span className="lable">Total Earnings</span>
                                <span className="value">$20000</span>
                            </div>
                            <div className="box2">
                                <span className="lable">Monthly Average</span>
                                <span className="value">$20000</span>
                            </div>
                            <div className="box3">
                                <span className="lable">Inventory value</span>
                                <span className="value">$20000</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-box">
                        <div className="total-listing">
                            <span className="value">10</span>
                            <span className="lable">Total Listing</span>
                        </div>
                        <div className="out-on-rent">
                            <span className="value">9</span>
                            <span className="lable">Out On Rent</span>
                        </div>
                        <div className="available">
                            <span className="value">8</span>
                            <span className="lable">Available</span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Stats;