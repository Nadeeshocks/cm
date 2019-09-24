import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => {

    return (
        props.catagories ? props.catagories.map((category) => {
            const cat_id = category.cat_name.split(' ').join('').replace('&','')

            return <div className="block-el">
                <div className="block-content">
                    <p id={cat_id}></p>
                    <div className="desc">
                        <span>{category.cat_name}</span>
                        <button className="theme-btn theme-btn-outline-white">
                            <Link to={"/" + category.cat_name} > View </Link>
                        </button>
                    </div>
                </div>
                <div className="block-bg"></div>
            </div> 
        }) : null
    )
}

