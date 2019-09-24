import { combineReducers } from 'redux';
import homeReducer from '../containers/home/reducer';
import authReducer from '../containers/auth/reducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
// import gearReducer from '../containers/addGear/reducer';
import gearcatReducer from '../containers/rentGear/reducer';

const rootReducer = combineReducers({
  home : homeReducer,
  auth : authReducer,
  firestore : firestoreReducer,
  firebase : firebaseReducer,
  gearscat: gearcatReducer
  
});

export default rootReducer;

