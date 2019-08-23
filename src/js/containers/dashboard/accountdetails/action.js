export const getUser = () => {
    return (dispatch, getState, {getFirestore}) => {
        const fireStore = getFirestore();
        const authId = getState().firebase.auth.uid;
        const user = getState().firebase.profile;

        if(!user.isEmpty)
        {
            dispatch({ type : "USERDATA", payload : user });    
        }
    }
}

export const changePassword = ( currentPassword , confrimPassword , newPassword ) => {

    const reauthenticate = (firebase) => {
        const user = firebase.auth().currentUser;
        const cred = firebase.auth.EmailAuthProvider.credential(
                user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }

    const res = {
        status : null,
        message : null
    }

    return (dispatch , getState , { getFirestore , getFirebase  }) => {
        if( confrimPassword == newPassword )
        {
            const firebase = getFirebase();
            reauthenticate( firebase ).then(() => {
            const user = firebase.auth().currentUser;
            user.updatePassword(newPassword).then(() => {
                res.status = 1
                res.msg = "Password Updated Successfully"
                dispatch({ type:"CHANGEPASSWORDSTATUS", payload:res })
            }).catch((error) => { 
                res.status = 0
                res.msg = error.message
                dispatch({ type:"CHANGEPASSWORDSTATUS", payload:res })
            });
            }).catch((error) => { 
                res.status = 0
                res.msg = error.message
                dispatch({ type:"CHANGEPASSWORDSTATUS", payload:res }) 
            });
        } 
        else{
            res.status = 0
            res.msg = "Password not Matched"
            dispatch({ type:"CHANGEPASSWORDSTATUS", payload: res })
        }   
    }
}

export const updateUser = (fullName, phoneNumber) => {
    return( async (dispatch, getState , { getFirestore}) => {
        const fireStore = getFirestore();
        const authId = getState().firebase.auth.uid;

        try{
            await fireStore.collection("users").doc(authId).update({
                "fullName" : fullName,
                "phoneNumber" : phoneNumber
            })
            dispatch({
                type  : "UPDATEUSERSTATUS",
                payload : "User Updated"
            })
        }
        catch(e)
        {
            console.log("error : " ,e);
            dispatch({
                type  : "UPDATEUSERSTATUS",
                payload : "failed to Update"
            })
        }


    })
}
    