import React from 'react';
import CustomInput from '../customInput';

import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import Price from './price';

export default props => {

    const slider = (
      <AliceCarousel mouseDragEnabled >
        {props.pstate.url.map(( image )=>(
          <img src={image} onDragStart={e => e.preventDefault()}  />
        ))}
      </AliceCarousel>
      
    );


    return <div className="add-gear-price">
      <div className="gear-left-container">
        <div className="theme-text-small text-gray">{props.pstate.categoryName}</div>
        <h4>{ props.pstate.Brand + ' ' + props.pstate.Model }</h4>

        <div className="price-type-tabs">
          <input id="new" type="radio" value="new"/>
          <label className={props.pstate.type === "new" ? 'active' : ''} htmlFor="new">New</label>
          <input id="like-new" type="radio" value="like_new"/>
          <label className={props.pstate.type === "like_new" ? 'active' : ''} htmlFor="like-new">Like New</label>
          <input id="slightly-worn" type="radio" value="slightly_worn"/>
          <label className={props.pstate.type === "slightly_worn" ? 'active' : ''} htmlFor="slightly-worn">Slightly Worn</label>
          <input id="worn" type="radio" value="worn"/>
          <label className={props.pstate.type === "worn" ? 'active' : ''} htmlFor="worn">Worn</label>
        </div>

        <div className="gear-carousel">
          {slider}
        </div>
      </div>
      <div className="gear-middle-container">
        <div className="gear-accessories-address">
          <div>
            <div className="theme-text-small text-gray">Accessories</div>
              {/* <ul> */}
              <div className="gear-listt">
                {
                  props.pstate.accessories.map((item, key)=>(
                    // <li key={key}>{item}</li>
                    <div className="" key={key}>{item}</div>
                  ))
                }
                </div>
              {/* </ul> */}
          </div>
          <div>
            <div className="theme-text-small text-gray">Address</div>
            <div className="">{props.pstate.Address}</div>
            <div className="">{props.pstate.City}</div>
          </div>
        </div>
        <div className="gear-description">
          <div className="theme-text-small text-gray gear-description">Description</div>
          <p>
            { props.pstate.Description }
          </p>
        </div>
      </div>
      <div className="gear-right-container">
                <Price pstate={props.pstate} addGear={props.addGear} onInputhandle={props.onInputhandle} previousStep={props.previousStep}/>
      </div>
    </div>
}

 