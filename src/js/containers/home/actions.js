

export const getGears = ( category ) =>  async (dispatch, getState , { getFirestore }) => {

    const firestore = getFirestore();
    const querySnapshot = await firestore.collection("allgears").where("categoryName", "==", category).get();

    
    // .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });

    // dispatch({
    //     type : "FILTERED_GEAR",
    //     payload : query
    // })

}

export const getNewArrivals = () => async (dispatch,getState ,{ getFirestore }) => {

    const firestore = getFirestore();
    const gears = await firestore.collection("allgears").orderBy("createdAt" ,"desc").get();
    dispatch({ type : "NEW_ARRIVALS" , payload: gears.docs })
}

export const getStories = () => async (dispatch,getState ,{ getFirestore }) => {
    const firestore = getFirestore();
    const gears = await firestore.collection("stories").get();
    dispatch({ type : "STORIES" , payload: gears.docs })
}

