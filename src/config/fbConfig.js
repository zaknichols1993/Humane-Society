import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBmc1Mcka9CMhkSBYNL8GBmU_BMhE838lo",
    authDomain: "hillsdale-humane-society.firebaseapp.com",
    databaseURL: "https://hillsdale-humane-society.firebaseio.com",
    projectId: "hillsdale-humane-society",
    storageBucket: "hillsdale-humane-society.appspot.com",
    messagingSenderId: "848683338793"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;