import React from 'react';
import {
  Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Favourites } from '../../components/favourite/favourite';

import { handleError, addFavourite, formatDate, days,  } from '../../containers/rentGear/actions';
import Cookies from 'js-cookie';

import Cart from '../cart';

const onAddItemToCart = (id) => {

}
const CardView = ( { gear_detail: { url,id, Brand, total_rating, City, rating,categoryName,Model, PricePerDay} ,pid ,addFavourite},props) => {
 console.log("fun props   ", props)
  return (
    <Col md="4">
      <Card className="gear_card_view">
      <Link to={`/geardetail/${pid}`}> <CardImg top width="100%" src={url ? url[0] :[]} alt="Card image cap" /></Link> 
        <CardBody>
          <CardTitle>{Brand}</CardTitle>
          <CardSubtitle>
            <span className="stars">
              {
                [1,2,3,4,5].map((i)=>{
                  return <i className="fa fa-star" key={i}></i>
                })
              }

            </span> &nbsp;
            <span>
              {rating}
            </span>
            <span className="total">
              {`(${total_rating})`}
            </span>&nbsp;  &nbsp;
            <span className="address">
              <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
              {City}
            </span>
          </CardSubtitle>
          <CardText>
            <span className="price">{PricePerDay}</span>
            <span className="theme-text-small text-gray">/per day</span>
          </CardText>
          <div className="buttons">
            {console.log('card view gear id :',id)}
            <Button className="cart" ><Link to={`/geardetail/${pid}`} >View gear</Link></Button>
            <Button className="fav" onClick={() => addFavourite(url,categoryName,Model,City,Brand,pid,PricePerDay)}><i className="fa fa-heart"></i></Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

const mapStateToProps = state => {


  return {

    // gear: state.gearscat.gearDetaily,
    // auth: state.firebase.auth
    


  }

}
const mapDispatchToProps = dispatch =>{
  return {

    addFavourite:(url,categoryName,Model,City,Brand,pid,PricePerDay) => dispatch(addFavourite(url,categoryName,Model,City,Brand,pid,PricePerDay))
    
   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardView);
