export const addgear = (gear) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        const users = getState().firebase.profile
        firestore.collection('allgears').add({ 
            categoryName : gear.categoryName ,
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
            fullname : users.fullName, 
            authorId: authorId,
            status:1,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_GEAR_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'CREATE_GEAR_ERROR' }, err);
    });
    }
};
