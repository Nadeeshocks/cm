export const getCatagories = () => {
    return async (dispatch, getState ,{ getFirestore }) => {
        console.log("here we are");
        const firestore = getFirestore();
        const query = firestore.collection("catagories");
        try{
            const res = await query.get().docs.data();
            console.log("res", await res );
            // dispatch( { type : "catagories", payload : await res.data } )
        }
        catch(e)
        {

        }
    }
}

export const getGear = (id) => {
    return async (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const query = firestore.collection("allgears").doc(id);
        try{
            const res = await query.get()
            dispatch({ type : "GetGear", payload : await res.data() })
        }
            
        catch(e)
        {
            dispatch({ type : "Error", payload : e })
        }
    }
} 

export const updateGear = (gear) => {
    return async (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        try{
            await firestore.collection("allgears").doc(gear.gearId).update( { categoryName : gear.categoryName ,
                categoryId : gear.categoryId ,
                accessories :gear.accessories ,
                url :gear.url ,
                ReplacementAmount :gear.ReplacementAmount ,
                PricePerDay :gear.PricePerDay ,
                Brand :gear.Brand , 
                Model :gear.Model , 
                Description :gear.Description , 
                type :gear.type,
                City :gear.City, 
                Region :gear.Region , 
                Address :gear.Address , 
                PostalCode :gear.PostalCode ,
                updatedAt: new Date() });
            dispatch({ type : 'updateGear', payload : 1})
        }
        catch(e)
        {
            dispatch({ type : 'Error', payload : 0 })
        }
    }
}