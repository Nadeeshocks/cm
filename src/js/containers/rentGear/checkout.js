// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
// import { Breadcrumb, BreadcrumbItem, Dropdown, DropdownToggle, Input, Label } from 'reactstrap';
// import CustomInput from './CustomInput';
// import moment from 'moment';
// import dataSet from './Dashboard/dataSet';

// import {  days, checkout, handleError } from './actions';


// class Checkout extends Component {
  
  


//     state = {
//       fullName: '',
//       address: '',
//       city: '',
//       product_region: '',
//       zip: '',
//       saveAddress: false,
//     }


//   renderCheckoutItems() {
//     const { cartsdd } = this.props;

//     const mappedCarts =Array.isArray(cartdd) && cartsdd.map((doc, index) => {
//         const listItem=doc.data();
//       const d = days(listItem.startDate, listItem.endDate);

//       return <div key={`cart-item-${index}`} className="checkout-item theme-text-small">
//         <div>{listItem.brand + ' ' + listItem.model }</div>
//         <div><b>${ listItem.pricePerDay * d }</b> for <b>{d}</b> days</div>
//       </div>
//     });

//     return (
//       <div className="checkout-items">
//         {
//           mappedCarts
//         }
//       </div>
//     )
//   }

//   async onCheckout() {
//     const { fullName, address, city, zip, saveAddress, product_region } = this.state;
//     const { carts } = this.props;

//     if( !fullName && !address && !city && !zip && !product_region ) {
//       handleError('Please provide required information');
//       return false;
//     }
//     let response = await checkout({
//         fullName,
//         address,
//         city,
//         zip,
//         product_region,
//         saveAddress
//     });

//     if (response) {
//       this.props.history.push("/payment");
//     }
//   }

//   render() {
//     const { carts } = this.props;

//     if (!carts) {
//       return <div className="centered-content">Loading...</div>
//     }

//     let total = 0;

//     carts.forEach((listItem, index) => {
//       const d = days(listItem.startDate, listItem.endDate);
//       total += d * listItem.pricePerDay;
//     });

//     const tax = total * 0.21;

//     const amount = total + tax;

//     return (
//       <div className="checkout centered-content">
//         <Breadcrumb>
//           <BreadcrumbItem>Home </BreadcrumbItem>
//           <BreadcrumbItem active>Cart</BreadcrumbItem>
//           <BreadcrumbItem active>Checkout</BreadcrumbItem>
//         </Breadcrumb>

//         <div className="theme-page-title">Checkout</div>

//         <div className="flex-row flex-align-stretch">
//           <div className="billing-address">
//             <div className="checkout-header">
//               <div className="text-gray">BILLING ADDRESS</div>
//             </div>
//             <div className="theme-form">
//               <Dropdown className="theme-form-field">
//                 <DropdownToggle caret>
//                   Saved Address
//                 </DropdownToggle>
//               </Dropdown>
//               <div className="theme-form-field">
//                 <CustomInput placeholder='Full Name' type="text" onChange={(value) => this.setState({fullName: value})}/>
//               </div>
//               <div className="flex-row">
//                 <div className="theme-form-field">
//                   <CustomInput placeholder='Address' type="text" onChange={(value) => this.setState({address: value})}/>
//                 </div>
//                 <div className="theme-form-field">
//                   <CustomInput placeholder='City' type="text" onChange={(value) => this.setState({city: value})}/>
//                 </div>
//               </div>
//               <div className="flex-row">
//                 <div className="theme-form-field">
//                   <CustomInput placeholder='Region' type="text" onChange={(value) => this.setState({product_region: value})}/>
//                 </div>
//                 <div className="theme-form-field">
//                   <CustomInput placeholder='Zip' type="text" onChange={(value) => this.setState({zip: value})}/>
//                 </div>
//               </div>
//               <div className="theme-form-field">
//                 <Input type="checkbox" id="save-address" checked={this.state.saveAddress} onChange={(e) => this.setState({saveAddress: e.target.checked})}/>
//                 <Label for="save-address">Save this address</Label>
//               </div>
//             </div>
//           </div>

//           <div className="order-info theme-text-small">
//             <div className="checkout-header">
//               <div className="text-gray">ORDER INFORMATION</div>
//               <button className="theme-btn theme-btn-filled-white theme-btn-link"><Link to="/cart">Edit Order</Link></button>
//             </div>

//             {
//               this.renderCheckoutItems()
//             }

//             <div className="checkout-total">
//               <div><span className="text-gray">Total </span> <b>${total}</b></div>
//               <div><span className="text-gray">Tax (21%) </span> <b>${tax}</b></div>
//               <div><span className="text-gray">Fee </span> <b>$0</b></div>
//             </div>

//             <div className="checkout-amount">
//               <div><span className="text-gray">Amount </span> <b>${amount}</b></div>
//             </div>
//           </div>
//         </div>

//         <div className="flex-row bottom-buttons">
//           <button className="theme-btn theme-btn-secondery theme-btn-link"><Link to="/cart">Edit Order</Link></button>
//           <button className="theme-btn theme-btn-primary" onClick={ this.onCheckout.bind(this)}>Payment</button>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStatesToProps = state => {
//     return {
//       authError: state.auth.authError,
//       auth: state.firebase.auth
//     }
//   }
//   const mapDispatchToProps = dispatch => {
//     return {
//       checkout: (items) => dispatch(checkout(items))
//     }
//   }
  
//   export default connect(mapStatesToProps, mapDispatchToProps)(Checkout);
