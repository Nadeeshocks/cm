
export const forgetPassword = ( data ) => ( dispatch, getState ,{ getFirebase }) => {
    const firebase = getFirebase();
    const auth = firebase.auth();
    const { email } = data;

    auth.sendPasswordResetEmail( email ).then(function() {
        const res = {
            status : "Sucsess",
            message : "Mail Sent"
        }
        dispatch({
            type : "forgetpassword",
            payload : res
        })
    }).catch(function(error) {
       
        const res = {
            status : "Failed",
            message : error.message
        }
        dispatch({
            type : "forgetpassword",
            payload :  res
        })
    });
}