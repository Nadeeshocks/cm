
export const getGears = () => {
    return async (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;

        const query = firestore.collection("allgears").where("authorId", "==" , authorId).where("status","==",1);
        const gears = await query.get();
      
        if(await gears)
        {
            dispatch({ type : 'getGears' , payload : gears.docs });
        }
    }
}

export const delGear =  (id) => {
    return async (dispatch,getState, {getFirestore}) => {
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        try{
            await firestore.collection("allgears").doc(id).update( { status: 0 });
            const query = firestore.collection("allgears").where("authorId", "==" , authorId).where("status","==",1);
            const gears = await query.get();
            if(await gears)
                dispatch({ type : 'getGears', payload : gears.docs })
        }
        catch(e)
        {
            dispatch({ type : 'delGear', payload : "Failed To Deleted Gear"})
        }
    
    }
}
