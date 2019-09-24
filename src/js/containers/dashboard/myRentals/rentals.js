import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getRentalGears } from './action'
import Table from '../../../components/listingTable/table'

class Rentals extends Component {

    TableHead = [ " ","Name & Category" , "Rental Period" , "LandLord", "Price per day" , "Amouth" ]

    componentDidMount(){
        this.props.getRentalGears()
    }

    render() {
    
        return (
            <Table  onClick={() => { console.log("Clciked from rentals") }} 
                    title="MY RENTALS" 
                    tableHead = {this.TableHead}
                    gears = { this.props.rentedGears }
                     />
        )
    }

}

const mapStateToProps = state => {
    return {
        rentedGears : state.rentedGears.gears
    }
}

export default compose(
    connect(
        mapStateToProps,
        { getRentalGears }
    )
)(Rentals)
