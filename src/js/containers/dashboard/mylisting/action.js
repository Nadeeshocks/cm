import { firestore } from "firebase";

export const getListingGears = () => {
    return async (dispatch , getState , { getFirestore }) => {
        const fireStore = getFirestore();
        const authId = getState().firebase.auth.uid;
        try{
            const row = await fireStore.collection("orders").where("userId","==", authId ).get();
            
            dispatch({
                type : "LISTING GEARS",
                payload : row.docs
            })
        }
        catch(e){
            console.log("error ",e);
        }
        
    }
}