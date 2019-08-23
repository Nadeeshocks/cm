import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/// Initialize Firebase
var config = {
  apiKey: "AIzaSyCRseSPXfjXVMOHUnMu-ujiGC25OVdHrXw",
  authDomain: "market-place-nadia.firebaseapp.com",
  databaseURL: "https://market-place-nadia.firebaseio.com",
  projectId: "market-place-nadia",
  storageBucket: "market-place-nadia.appspot.com",
  messagingSenderId: "766592336593"
};

firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;