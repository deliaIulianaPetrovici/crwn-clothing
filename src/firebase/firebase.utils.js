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

  export const createUserProfileDocument=async(userAuth, additionalData)=>{
      if(!userAuth) return;

      const userRef =firestore.doc(`users/${userAuth.uid}`);

      const snapShot=await userRef.get();

      if(!snapShot.exists){
          const {displayName, email}=userAuth;
          const createdAt = new Date();

          try{
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                ...additionalData         
                 })
          }catch(error){
              console.log('error creating user', error.message);
          }
       
      }
      return userRef;

  }



  export const addColletionAndDocuments=async (collectionKey, objectsToAdd)=>{
      const collectionRef=firestore.collection(collectionKey);
     
      const batch= firestore.batch();

      objectsToAdd.forEach(obj=>{
          const newDocRef= collectionRef.doc();
          batch.set(newDocRef,obj);
      });

      return await batch.commit();
  }


  export const convertCollectionsSnapshotToMap =(collections)=>{
      const transformedColletion = collections.docs.map(doc => {
          const {title, items} = doc.data();

          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          }
      });
      return transformedColletion.reduce((accumulator,collection)=>{
          accumulator[collection.title.toLowerCase()]=collection;
          return accumulator;
      } ,{})

  };

  export const getCurrentUser=()=>{
      return new Promise((resolve,reject)=>{
          const unsuscribe=auth.onAuthStateChanged(userAuth=>{
              unsuscribe();
              resolve(userAuth);

          },reject)
      });
}

  firebase.initializeApp(config);

  
  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  export const googleProvider=new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({
      prompt:'select_account'
  });

  export const signInWithGoogle=()=>auth.signInWithPopup(googleProvider);

  export default firebase;