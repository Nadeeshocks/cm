import React, { Component } from 'react';
// import Cookies from 'js-cookie';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import Rating from 'react-rating';
import DatePicker from "react-datepicker";
import CustomCarousel from './customCarousel';
import { formatDate } from '../containers/rentGear/actions';
import { gearDetail } from '../containers/rentGear/actions';
import Rating from 'react-rating';
import 'react-datepicker/dist/react-datepicker.css';
// import Resizer from 'react-image-file-resizer';
import { addCart } from '../containers/rentGear/actions';
class GearDetail extends Component {

  state = {
    // startDate: new Date(),
    // endDate:new Date(),
    // url:"",
    // category:this.props.gear.category,
    // Brand:this.props.gear.brand,
    // Model:this.props.gear.Model,
    // PricePerDay:this.props.gear.PricePerDay,
    // authorId:this.props.authorId
  }
  componentDidMount() {
    const id=this.props.match.params.id;
    this.props.gearDetail(id);
    
    
  }
  onAddItemToCart = (id) => {
     this.props.addCart(this.state,id);
}
  

  render() {
    const { gear } = this.props;
    const { auth } =this.props;

    if(gear != null){
      console.log("bc gear :  ", gear.url[0]);
    }
    if (!gear) {
      return <div className="centered-content">Loading...</div>;
    }

    const name = gear.Brand + ' ' + gear.Model;
   
 
    //  this.setState({ url: gear.url});
    // const id = ;

    return (


        
      <div className="view-gear centered-content">
        <div className="left-container">

          <CustomCarousel items={gear.url} />
        </div>
        <div className="right-container">
          <div>
            <Breadcrumb>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Rent Gears</BreadcrumbItem>
              <BreadcrumbItem>{gear.categoryName}</BreadcrumbItem>
              <BreadcrumbItem active>{name}</BreadcrumbItem>
            </Breadcrumb>

            <div className="right-container">
              <div className="gear-info">
                <div className="theme-form-small text-gray">{gear.categoryName}</div>
                <h4>{name}</h4>

                <div className="theme-form-small text-gray">Accessories</div>
                {/* <div>{gear.accessories.join(', ')}</div> */}

                <div className="theme-form-small text-gray">Description</div>
                <div>{gear.Description}</div>
              </div>
              <div className="gear-purchase">
                <div>
                  <Rating
                    emptySymbol='fa fa-star-o primary-color'
                    fullSymbol='fa fa-star primary-color' />
                  <span className="theme-form-small"> 5.0 (25)</span>
                  <div>{gear.city}</div>
                </div>
                <div>
                  <div className="theme-form-small text-gray">Replacement Value</div>
                  <div>${gear.replacementValue}</div>
                </div>
                <div>
                  <div>${gear.PricePerDay} / day</div>
                </div>
                {
                  //  auth.uid !== gear.AuthorId ?
                  <div>
                    <div>
                      <DatePicker placeholderText="Pickup Date" selected={this.state.startDate}
                        onChange={(date) => this.setState({ startDate: date })} />
                    </div>
                    <div>
                      <DatePicker placeholderText="Return Date" selected={this.state.endDate}
                        onChange={(date) => this.setState({ endDate: date })} />
                    </div>

                    <div className="flex-row bottom-buttons">
                      
                      <button className="theme-btn theme-btn-primary"
                       onClick={ () =>
                          {if(!this.props.profile.fullName) { this.onAddItemToCart(this.props.match.params.id)}
                           else{ this.props.history.push('/login');}
                          }
                        
                        }
                         >Add to Cart</button>
                      <button className="theme-btn theme-btn-secondery"><i className="fa fa-heart primary-color" /></button>
                    </div>
                  </div>
                  // : null
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {


  return {

    gear: state.gearscat.gearDetaily,
    profile: state.firebase.profile
    


  }

}
const mapDispatchToProps = dispatch => {
  return {
    addCart:(item,id) => dispatch(addCart(item,id)),
    gearDetail:(id) => dispatch(gearDetail(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GearDetail);

