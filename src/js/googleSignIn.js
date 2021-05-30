import { write } from '@popperjs/core';
import firebase from './firebase';
import writeUserData from './user-collections'; 
import displayHome from './displayHome'; 

function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
           
            if(result.additionalUserInfo.isNewUser){
                alert("Hi new user");
                writeUserData(user.email, user.uid).then(() => {
                    displayHome(); 
                })
                .catch((error) => {
                    alert("Error writing document: ", error);
                });;
            }
            else{
                displayHome(); 
            }
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}

export default function enableSignInWithGoogleBtnFunctionality(){
    const googleSignInBtn = document.getElementById('signInWithGoogleBtn');
    googleSignInBtn.addEventListener('click', signInWithGoogle); 
}
