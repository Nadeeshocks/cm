import React from 'react';

const HamBurgerIcon = props =>{
  return (
    <button className="button-toggle" onClick={props.click}>
      {
        props.open ? <span className="fa fa-times "></span> : 
        <span className="fa fa-bars"></span>   
      }
    </button>
  )

}

export default HamBurgerIcon;