export const getListingGears = () => {
    return (dispatch , getState , { getFirestore }) => {
        const FireStore = getFirestore;
        dispatch({
            type : "LISTING GEARS",
            payload : ["list"]
        })
    }
}