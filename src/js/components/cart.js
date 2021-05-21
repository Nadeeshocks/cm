import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Table } from 'reactstrap';
import moment from 'moment';
import { handleError, getCarts, formatDate, days, deleteCartItem } from '../containers/rentGear/actions';
// import Cookies from 'js-cookie';
// import Checkout from '../containers/rentGear/checkout';
class Cart extends Component {
  
  componentDidMount(){
    
   const uid=this.props.auth.uid;
   this.props.getCarts(uid);
    
   
  }

  renderCartItems() {
 
  
    
    const { cartsdata } = this.props;

    
    return (
      Array.isArray(cartsdata) && cartsdata.map((doc, index) => {
           
              const carts=doc.data();
              console.log('start date ',carts.startDate);
              const {startDate,endDate}=carts;
     return(
        <tr key={`cart-item-${carts.id}`}>
          <td width="15%">{ carts.url && carts.url.length > 0 ? <img src={carts.url[0]} className="gear-img"/> : null }</td>
          <td className="gear" width="20%">
            <p >{carts.Brand + ' ' + carts.Model }</p>
            <p className ="theme-text-small text-muted">{carts.categoryName}</p>
          </td>
          <td className="rental-period" width="20%">
            <p>
            {moment(carts.startDate.toDate()).calendar()} to {moment(carts.endDate.toDate()).calendar()} `
            </p>
            <p className="theme-text-small text-muted">
              {moment({startDate}).diff({endDate}, 'days')}
            </p>
          </td>

          <td width="15%">{carts.PricePerDay}</td>
          <td width="15%">{carts.PricePerDay * moment({startDate}).diff({endDate}, 'days')}</td>


          { console.log("days",moment({startDate}).diff({endDate}, 'days'))}
          <td><i className="fa fa-times" aria-hidden="true" onClick={async () => { await deleteCartItem({gearid: carts.gearid, orderid: carts.orderid}); getCarts();}}></i></td>

        </tr>
     )
      }));
  }

  render() {

    




    const { cartsdata } = this.props;


    if(!cartsdata) {
      return <div className="centered-content"> Loading... </div>
    }
  
    return (
      <div>
     
    
      <div className="cart centered-content">
         {/* <Checkout cartsdd={cartsdata} /> */}
        <Breadcrumb>
          <BreadcrumbItem>Home </BreadcrumbItem>
          <BreadcrumbItem active>Cart</BreadcrumbItem>
        </Breadcrumb>
        <div className="cart-header">
          <div className="theme-page-title">Cart</div>
          <div className="flex-row">
            <button className="theme-btn theme-btn-secondery"><Link to="/favourites">Favourites</Link></button>
            <button className="theme-btn theme-btn-primary theme-btn-link"><Link to="/checkout">Continue</Link></button>
          </div>
        </div>

        <div>
          <Table className="theme-table">
            <thead>
              <tr>
                <th></th>
                <th>Name & Category</th>
                <th>Rental Period</th>
                <th>Price Per Day</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.renderCartItems()
              }
            </tbody>
          </Table>
        </div>
      </div>
     </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("cart state",state.gearscat.cartItem);
  return {
    auth: state.firebase.auth,
    cartsdata:state.gearscat.listcart

  }
}
const mapDispatchToProps = dispatch =>{

  return {
    getCarts: (id) => dispatch(getCarts(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
