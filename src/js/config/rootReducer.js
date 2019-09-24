import { combineReducers } from 'redux';
import homeReducer from '../containers/home/reducer';
import authReducer from '../containers/auth/reducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import addgearReducer from '../containers/addGear/reducer';
import listGearReducer from '../containers/listGear/reducer'
import UpdateGearReducer from '../containers/updateGear/reducer';
import accountDetailReducer from '../containers/dashboard/accountdetails/reducer'
import mylistingGears from '../containers/dashboard/mylisting/reducer'
import myRentalGears from '../containers/dashboard/myRentals/reducer'
import UserDetails from '../containers/dashboard/reducers'
import forgerPassword  from '../containers/forgetPassword/reducer'


const rootReducer = combineReducers({
    home : homeReducer,
    auth : authReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer,
    gearStatus : addgearReducer,
    gearCRUD : listGearReducer,
    updateGear : UpdateGearReducer,
    accountDetail : accountDetailReducer,
    rentedGears : myRentalGears,
    myGears : mylistingGears,
    user : UserDetails,
    forgerPassword : forgerPassword
});

export default rootReducer;

