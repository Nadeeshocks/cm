import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Table } from 'reactstrap';
import moment from 'moment';
import { handleError,  getFavourite, formatDate, days,  } from '../../containers/rentGear/actions';

class Favourites extends Component {
  

  componentDidMount(){
    const uid=this.props.auth.uid;
    this.props.getFavourite(uid);
  }
  renderFavouritesItems() {

    const { favourites } = this.props;

    return (
      favourites && favourites.map((doc, index) => {
        const listItem=doc.data();
        console.log('favourite',listItem);
        return(
          
         
          <tr key={`cart-item-${123}`}>
          <td width="15%">{ listItem.url && listItem.url.length > 0 ? <img src={listItem.url[0]} className="gear-img"/> : null }</td>
          <td className="gear" width="20%">
            <p >{listItem.Brand + ' ' + listItem.Model }</p>
            <p className ="theme-text-small text-muted">{listItem.categoryName}</p>
          </td>
          <td width="15%">{listItem.PricePerDay}</td>
          <td width="15%">{listItem.pricePerDay * days(listItem.startDate, listItem.endDate)}</td>
          <td><button className="theme-btn theme-btn-primary theme-btn-link"><Link to={`/gear/${listItem.gearid}`}>Add to cart</Link></button></td>
          {/* <td><i className="fa fa-times" aria-hidden="true" onClick={async () => { await deleteFavourite({gearid: listItem.gearid});}}></i></td> */}
        </tr>
        )
  })
    )
  }

  render() {
    const { favourites } = this.props;

    if(!favourites ) {
      return <div className="centered-content"> Loading... </div>
    }
    return (
      <div className="cart centered-content">
        <Breadcrumb>
          <BreadcrumbItem>Home </BreadcrumbItem>
          <BreadcrumbItem active>Favourites</BreadcrumbItem>
        </Breadcrumb>
        <div className="cart-header">
          <div className="theme-page-title">Favourites</div>
          <div className="flex-row">
            <button className="theme-btn theme-btn-secondery"><Link to="/">Continue Shopping</Link></button>
            <button className="theme-btn theme-btn-primary theme-btn-link"><Link to="/cart">Cart</Link></button>
          </div>
        </div>

        <div>
          <Table className="theme-table">
            <thead>
              <tr>
                <th></th>
                <th>Name & Category</th>
                <th>Price Per Day</th>
                <th>Amount</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.renderFavouritesItems()
              }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log("cfav state",state.gearscat.ListFavourite);
    return {
      auth: state.firebase.auth,
      favourites:state.gearscat.ListFavourite
  
    }
  }
  const mapDispatchToProps = dispatch =>{
  
    return {
      getFavourite: (id) => dispatch(getFavourite(id))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
