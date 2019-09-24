import React, { Component } from 'react';
import { getTotalEarnings, getMonthlyAverage, getTotalGears,getInventryValue } from '../action'
import { connect } from "react-redux";
import Chart from '../../../components/dashboard/graph';

class Stats extends Component {

    componentDidMount() {
        this.props.getTotalEarnings();
        this.props.getMonthlyAverage();
        this.props.getTotalGears();
        this.props.getInventryValue();
    }

    render() {
        const { totalEarning, monthlyAverage, totalGear, rentedGears, avaliableGears, InventryValue } = this.props;
        return (
            <React.Fragment>
                <h4> DashBoard </h4>
                <div className="chart-content">

                    <div className="main-box">
                        <Chart />
                        <div className="left-box">
                            <div className="box1">
                                <span className="lable">Total Earnings</span>
                                <span className="value">{"Rs. " + totalEarning}</span>
                            </div>
                            <div className="box2">
                                <span className="lable">Monthly Average</span>
                                <span className="value">{"Rs. "+ monthlyAverage}</span>
                            </div>
                            <div className="box3">
                                <span className="lable">Inventory value</span>
                                <span className="value">{"Rs. " + InventryValue}</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-box">
                        <div className="total-listing">
                            <span className="value">{totalGear}</span>
                            <span className="lable">Total Listing</span>
                        </div>
                        <div className="out-on-rent">
                            <span className="value">{rentedGears}</span>
                            <span className="lable">Out On Rent</span>
                        </div>
                        <div className="available">
                            <span className="value">{avaliableGears}</span>
                            <span className="lable">Available</span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        totalEarning : state.user.totalEarning,
        monthlyAverage : state.user.monthlyAverage,
        totalGear : state.user.totalGear,
        rentedGears : state.user.rentedGears,
        avaliableGears : state.user.avaliableGears,
        InventryValue : state.user.InventryValue
    }
}
export default connect( mapStateToProps , {
    getTotalEarnings, getMonthlyAverage, getTotalGears, getInventryValue
})(Stats)