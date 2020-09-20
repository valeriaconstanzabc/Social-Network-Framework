import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBFuYPLi8R64c_sVh_RfRVTUWbSHrtgK7o",
    authDomain: "comunidadlofche.firebaseapp.com",
    databaseURL: "https://comunidadlofche.firebaseio.com",
    projectId: "comunidadlofche",
    storageBucket: "gs://comunidadlofche.appspot.com",
    messagingSenderId: "785475297111",
    appId: "1:785475297111:web:604dd9fbd10875e173a812"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()
const db = firebase.firestore()
const auth = firebase.auth()
//const user = firebase.auth().currentUser

export { storage, db, auth }