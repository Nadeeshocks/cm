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
        console.log( "ya maira l gear", this.props.myGears);
        return(       
            <Table  onClick={() => { console.log("Clciked from Listing")}} 
                    title="MY LISTING"
                    tableHead = {this.TableHead} 
                    gears = { [] } />
        )
    }
}

const mapStateToProps = state => {
    return {
        myGears : state.myGears
    }
}

export default compose(
    connect(
        mapStateToProps,
        { getListingGears }
    )
)(Listing)
