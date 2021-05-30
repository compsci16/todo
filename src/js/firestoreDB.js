
import firebase from './firebase';

export default function getFirestoreDB(){
    const db = firebase.firestore();
    return db; 
}


