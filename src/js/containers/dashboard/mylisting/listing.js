import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getListingGears } from './action';
import Table from '../../../components/listingTable/table'

class Listing extends Component {
    
    componentDidMount(){
        this.props.getListingGears()
    }
    TableHead = [ " ","Name & Category" , "Rental Period" , "Client", "Price per day" , "Amouth" ];
    render()
    {
        const gears = this.props.myGears.gears;
        return(       
           <Table onClick={() => { console.log("Clciked from Listing")} } 
                title="MY LISTING"
                tableHead = { this.TableHead } 
                gears = { gears } />
        )
    }
}

const mapStateToProps = state => {
    return {
        myGears : state.myGears,
    }
}

export default compose(
    connect(
        mapStateToProps,
        { getListingGears }
    )
)(Listing)
