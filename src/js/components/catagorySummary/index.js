import React from 'react';
import { Link } from 'react-router-dom';

export default props =>{
  const { catagory } = props;
  // console.log("ya data", catgory);
  // const name = catagory.cat_name.replace(/\s+/g, '-');;
  return (
    <div className="block-el">
      <div className="block-content">
        <p id="camera"></p>
        <div className="desc">
          <span>{catagory.cat_name}</span>
          <button className="theme-btn theme-btn-outline-white">
            <Link to={`/rentgear/${catagory.id}`} >View</Link>
          </button>
        </div>
      </div>
      <div className="block-bg"></div>
    </div>
  );
}