

export const getGears = ( category ) =>  async (dispatch, getState , { getFirestore }) => {

    const firestore = getFirestore();
    const querySnapshot = await firestore.collection("allgears").where("categoryName", "==", category).get();
    console.log("ya data" , querySnapshot.doc );
    
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
