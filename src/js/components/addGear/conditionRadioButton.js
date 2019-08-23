import React from 'react';

export default props => {
        return(
            <div className="type-tabs">
              <input name="type" id="new" type="radio" value="new" onChange={props.onInputhandle}/>
              <label className={props.type === "new" ? 'active' : ''} htmlFor="new">New</label>
              <input name="type" id="like-new" type="radio" value="like_new" onChange={props.onInputhandle}/>
              <label className={props.type === "like_new" ? 'active' : ''} htmlFor="like-new">Like New</label>
              <input name="type" id="slightly-worn" type="radio" value="slightly_worn" onChange={props.onInputhandle}/>
              <label className={props.type === "slightly_worn" ? 'active' : ''} htmlFor="slightly-worn">Slightly Worn</label>
              <input name="type" id="worn" type="radio" value="worn" onChange={props.onInputhandle}/>
              <label className={props.type === "worn" ? 'active' : ''} htmlFor="worn">Worn</label>
            </div>
        )
}