import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBOhyN9W9WYUGKguwFAIbBx0tdBuWqGo94",
    authDomain: "ecommerce-practice-84f4b.firebaseapp.com",
    projectId: "ecommerce-practice-84f4b",
    storageBucket: "ecommerce-practice-84f4b.appspot.com",
    messagingSenderId: "684936091931",
    appId: "1:684936091931:web:5e16254aa1fe50c1865bbe"
};

// initialize firebase app
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();