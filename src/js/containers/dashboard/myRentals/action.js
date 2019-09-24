export const getRentalGears = () => {
    return async (dispatch , getState , { getFirestore }) => {
        const fireStore = getFirestore();
        const authId = getState().firebase.auth.uid;
        try{
            const row = await fireStore.collection("orders").where("ClientId","==", authId ).get();
            dispatch({
                type : "RENTAL GEARS",
                payload : row.docs
            })
        }
        catch(e){
            console.log("error ",e);
        }
        
    }
}