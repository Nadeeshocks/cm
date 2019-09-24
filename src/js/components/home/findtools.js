// import React, { Component } from 'react'
// import { Container} from 'reactstrap';
// import AutoSuggestion from './autosuggestions';


// export default class FindTools extends Component{


//     onRadioClicked = (e) => {
//         // this.setState({
//         //     currentCategory : e.target.value
//         // })
//         // console.log("ghjksjdc soia",e.target.id)
//         this.props.getGears(e.target.id);
//     }

//     render(){
//         const catagories = this.props.catagories;
//         const gears = this.props.filterd_gears;
//         console.log("data in filter : ", gears);
//         return(
//             <Container className="centered-content">  
//                 <h2 className="title">Find Creative Tools Around You</h2>
//                 <p className="desc">
//                   <span >Creative market is a community </span>&nbsp;
//                   <span className="bold">for creators, by creators.</span>
//                 </p>

//                 <div className="row"> 
//                     {/* <p>Rent </p>
                    
//                         {catagories && catagories.map((catagorie, key)=>(
//                             <React.Fragment>
//                                 <input name="cats" id={catagorie.cat_name} type="radio" onClick={this.onRadioClicked}/> 
//                                 <label for={catagorie.cat_name}> {catagorie.cat_name} </label>
//                             </React.Fragment>
//                         ))}
                    
//                     <p>and more from people around you</p> */}
//                 </div>

//                 <div className="row">
//                     <AutoSuggestion data={ catagories }/>
//                     <button>Search</button>
//                 </div>
                

//             </Container>
//         )
//     }

// }


