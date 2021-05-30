import firebase from './firebase';


export default function(credentials){
    console.log(credentials); 
    const email = credentials.email; 
    const password = credentials.password; 
    firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(`Error ${errorCode}: ${errorMessage}`);
            });
}
