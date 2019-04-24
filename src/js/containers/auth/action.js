import ACTIONS from './actionType';
// import axios from "axios";

  export const signIn = ({ credentials, firebase }) => (dispatch, getState) => {
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password,
    ).then(()=>{

      dispatch({ type: ACTIONS.LOGIN_SUCCESS });
    }).catch((err)=>{

      dispatch({ type: ACTIONS.LOGIN_ERROR , payload : err});
    })
  }

// const registration = (data) => async (dispatch, {getFirebase, getFirestore}) => {
//   try {
//     dispatch({
//       type: ACTIONS.REGISTRATION_REQUEST
//     });

//     let response = await axios.Post(API_URL + 'users', data);
//     dispatch({
//       type: ACTIONS.REGISTRATION_SUCCESS,
//       payload: true
//     })
//   }
//   catch (err) {
//     dispatch({
//       type: ACTIONS.REGISTRATION_ERROR,
//       payload: err
//     })
//   }
// }
