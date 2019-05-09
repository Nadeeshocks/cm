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

export const signOut = () => (dispatch, getState, {getFirebase})=>{
  const firebase = getFirebase();

  firebase.auth().signOut().then(()=>{
    dispatch({ type : ACTIONS.SIGN_OUT})
  })

}

export const signUp = (newUser) => (dispatch, getState, { getFirebase, getFirestore}) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase.auth().createUserWithEmailAndPassword(
    newUser.email,
    newUser.password
  ).then((resp)=>{
    return firestore.collection('users').doc(resp.user.uid).set({
      fullName: newUser.fullName,
      phoneNumber: newUser.phoneNumber,
      address: newUser.address,
      initials: newUser.fullName[0],
      image:newUser.url
    })
  }).then(()=>{
    dispatch({ type : ACTIONS.REGISTRATION_SUCCESS});
  }).catch((err)=>{
    dispatch({ type : ACTIONS.REGISTRATION_ERROR , payload : err}) ;   
  })
}
