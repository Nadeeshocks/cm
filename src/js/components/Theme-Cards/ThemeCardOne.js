import React from 'react';
import { Card, CardTitle, CardText, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';

const ThemeCardOne = (props) =>{
  const { url, Model,  categoryName, Brand, PricePerDay } = props.Gear
    return (
      <Link to={`/gear/${ props.gearId }`}>
      <Card inverse className="theme-1">
        <CardImg width="100%" src={url && url.length > 0 ? url[0] : ""} alt="Card image cap" />
        <div className="overlay">
          <CardTitle>
            <span className="theme-text-small text-muted d-block">{categoryName}</span>
            <span className="gear-title">{Brand + " " + Model}</span>
          </CardTitle>
          <CardText>
            <span>
              <span className="price">{PricePerDay}</span>{' '}
              <small className="">per day</small>
            </span>
            <span className="arrow"></span>
          </CardText>
        </div>
      </Card>
      </Link>
    );
}

export default ThemeCardOne;
