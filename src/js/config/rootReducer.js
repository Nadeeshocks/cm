import { combineReducers } from 'redux';
import homeReducer from '../containers/home/reducer';
import authReducer from '../containers/auth/reducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  home : homeReducer,
  auth : authReducer,
  firestore : firestoreReducer,
  firebase : firebaseReducer
});

export default rootReducer;

