import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCnv1bpDACP1o5Sm6rJymf7eKk0BVNKrVk",
    authDomain: "wubbet-7c8d3.firebaseapp.com",
    databaseURL: "https://wubbet-7c8d3.firebaseio.com",
    projectId: "wubbet-7c8d3",
    storageBucket: "wubbet-7c8d3.appspot.com",
    messagingSenderId: "436815509266",
    appId: "1:436815509266:web:44f98601552fd35ed465cb",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.storage();
export default firebase;