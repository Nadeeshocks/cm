export const  getUserDetails = () => {
    return async (dispatch, getState, {getFirestore ,getFirebase }) => {
        const firestore = getFirestore();
        const authId = getState().firebase.auth.uid;
        // const user =  firebase.auth().currentUser;
        // console.log( "yoo user  " , user );

        try{
            const user = await firestore.collection("users").doc(authId).get()
            dispatch({ type : "USERDATA", payload : user.data() });    
        }
        catch(e){

        }
    }
}