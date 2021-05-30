import displayLogin from "./displayLogin";
import firebase from './firebase'; 

export default function notLoggedIn(){
    
    firebase.auth().onAuthStateChanged(user => {
        if (!user) {
            displayLogin(); 
        }
    
    })
}