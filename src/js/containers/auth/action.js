import ACTIONS from './actionTypes';
import axios from "axios";

const API_URL = 'http://localhost:3000/';


const registration = ( data ) => async dispatch => {
  try{
    dispatch({ 
      type: ACTIONS.REGISTRATION_REQUEST 
    });

    let response = await axios.Post(API_URL + 'users' , data);    
    dispatch({
      type: ACTIONS.REGISTRATION_SUCCESS,
      payload: true
    })
  }
  catch(err){
    dispatch({
      type: ACTIONS.REGISTRATION_ERROR,
      payload: err
    })
  }  
}

export default registration;