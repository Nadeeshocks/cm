export const addgear = (gear) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firestore.collection('gears').add({
        ...gear,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_GEAR_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_GEAR_ERROR' }, err);
      });
    }
  };