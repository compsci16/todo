// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAXGilh4OyYiGlRDE30yZoCHtYQviAX_78",
    authDomain: "todo-faaca.firebaseapp.com",
    projectId: "todo-faaca",
    storageBucket: "todo-faaca.appspot.com",
    messagingSenderId: "736551434279",
    appId: "1:736551434279:web:82c12c71d8ee0d36f8f602"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;