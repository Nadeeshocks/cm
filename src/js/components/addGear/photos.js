import React , { Component }from 'react';

export default class photos extends Component {


    constructor(props) {
        super(props);
        this.addImageRef = React.createRef();
    }
    

    componentDidMount(){
        this.addImageRef.current.onclick = () => {
            console.log("in mount",this.addImageRef)
            this.inputElement.click();
        }       
    }
    render(){
        const props = this.props;
        const parentState = props.pstate;
        let mappedImages;
        if( parentState.url != null )
        {
            mappedImages = parentState.url.map((image, index) => (
                <div className="add-gear-image" key={'gear-image-' + index}>
                <img src={image} />
                </div>
            ))
        }
        
        
        return(
            <div className="add-gear-photos">
                <div className="add-gear-images">
                { mappedImages }
                    <div className="add-gear-addimage file-input-container">
                        <i className="fas fa-plus-circle" ref={this.addImageRef} ></i>
                        <input type="file"  accept="image/*" onChange={props.addPhoto} ref={input => this.inputElement = input}/>
                    </div>
                </div>
            </div>)
    }
    
}