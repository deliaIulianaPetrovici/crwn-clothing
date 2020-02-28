import firebase from 'firebase/app'; 
import 'firebase/firestore'; //database
import 'firebase/auth'; //authentication 


const config = {
    apiKey: "AIzaSyCHFvU7iOhzqY3zR1hvHr7j62pu4nzb3os",
    authDomain: "crwn-db-d99b8.firebaseapp.com",
    databaseURL: "https://crwn-db-d99b8.firebaseio.com",
    projectId: "crwn-db-d99b8",
    storageBucket: "crwn-db-d99b8.appspot.com",
    messagingSenderId: "633683705547",
    appId: "1:633683705547:web:c6af8442148ae43d17a54e",
    measurementId: "G-HRJXBQCV87"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt:'select_account'
  });

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;