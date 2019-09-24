import React , { Component } from 'react';

export default props => {

    return <div className="add-gear">
        <h1><i className="fa fa-check-circle primary-color"></i></h1>
        <h3>Gear Added Successfully</h3>

        <div className="success-message">
          <div className="theme-text-small">{ props.pstate.categoryName }</div>
          <h6>{ props.pstate.Brand + ' ' + props.pstate.Model}</h6>

          <div className="flex-row">
            <div>
              <div className="theme-text-small">Replacement Value</div>
              <div>${props.pstate.ReplacementAmount}</div>
            </div>
            <div>
              <div className="theme-text-small">Price per day</div>
              <div>${props.pstate.PricePerDay}</div>
            </div>
          </div>

          <div className="flex-row buttons-container">
            {/* <button className="theme-btn theme-btn-secondery theme-btn-link"><Link to="/listgear">List Gear</Link></button> */}
            {/* <button className="theme-btn theme-btn-primary theme-btn-link"><Link to={`/gear/${gearId}`}>View Gear</Link></button> */}
          </div>
        </div>
      </div>

}