import firebase from './firebase';

export default function writeUserData(email,userId) {
    return firebase.firestore().collection("users").doc(`${userId}`).set({
       email: email,
       uid: userId
    });
  }
