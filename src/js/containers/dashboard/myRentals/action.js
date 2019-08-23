export const getRentalGears = () => {
    return (dispatch , getState , { getFirestore }) => {
        const FireStore = getFirestore;
        dispatch({
            type : "RENTAL GEARS",
            payload : ["rental"]
        })
    }
}