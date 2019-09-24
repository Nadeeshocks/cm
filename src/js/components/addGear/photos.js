import React from 'react';
export default props => {
    const mappedImages = props.url.map((image, index) => (
        <div className="add-gear-image" key={'gear-image-' + index}>
          <img src={image} />
        </div>
      ))
    return(
    <div className="add-gear-photos">
        <div className="add-gear-images">
        { mappedImages }
            <div className="add-gear-addimage file-input-container">
                <i className="fas fa-plus-circle"></i>
                <input type="file" onChange={props.addPhoto}/>
            </div>
        </div>
    </div>)
}