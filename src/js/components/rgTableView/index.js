import React from 'react';
import {
  Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addFavourites } from '../../containers/rentGear/actions';

import Cookies from 'js-cookie';

import { handleError, addFavourite, formatDate, days,  } from '../../containers/rentGear/actions';

// const onAddItemToCart = (id) => {
//   <Link to={`/geardetail/${id}`}>  </Link>

// }
const TableView = ({ gear_detail: {  url,id, Brand, total_rating, City, rating,categoryName,Model, PricePerDay},pid }) => {

  
  
console.log("this is id",id);
  return (
    <Col sm="12">
      <Card className="gear_table_view">
        <div className="card-img">
        <Link to={`/geardetail/${id}`}>  <CardImg top width="100%" src={url ? url[0] : []} alt="Card image cap" /></Link>
        </div>
        <CardBody>
          <div className="card-center">
            <CardTitle>{Brand}</CardTitle>
            <CardSubtitle>
              <span className="stars">
                {
                  [1, 2, 3, 4, 5].map((i) => {
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
          </div>
          <div className="card-right">
            <CardText>
              <span className="price">{PricePerDay}</span>
              <span className="theme-text-small text-gray">/per day</span>
            </CardText>
            <div className="buttons">
            <Button className="cart" ><Link to={`/geardetail/${pid}`} >View gear</Link></Button>
            <Button className="fav" onClick={() => addFavourite(url,categoryName,Model,City,Brand,id,PricePerDay)}><i className="fa fa-heart"></i></Button>

            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(TableView);

