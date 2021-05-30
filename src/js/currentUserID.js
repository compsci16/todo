import firebase from './firebase';

export default function getCurrentUserID() {
  var user = firebase.auth().currentUser;
  var uid; 
  if (user != null) {
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    return uid;
  }
  return uid;
}
