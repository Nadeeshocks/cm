import ACTIONS from './actionType';

export const signIn = (credentials) => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password,
    ).then(()=>{

      dispatch({ type: ACTIONS.LOGIN_SUCCESS });
    }).catch((err)=>{

      dispatch({ type: ACTIONS.LOGIN_ERROR , payload : err});
    })
  }

export const signOut = () => (dispatch, {getFirebase})=>{
  const firebase = getFirebase();
  console.log("zgfhjf,");
  firebase.auth.signOut().then(()=>{
    dispatch({ type : ACTIONS.SIGN_OUT})
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
