// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = firebase.initializeApp ({
     apiKey: "AIzaSyDdv872xjFlsFZTSL6XcUvT_4hmb-f-GGY",
     authDomain: "clone-vijay.firebaseapp.com",
     projectId: "clone-vijay",
     storageBucket: "clone-vijay.appspot.com",
     messagingSenderId: "633326817979",
     appId: "1:633326817979:web:90136d31fa8050d2c00f9e",
     measurementId: "G-X3C08SM5TH"
   });

   const db = firebase.firestore();
   const auth = firebase.auth();
   const provider = new firebase.auth.GoogleAuthProvider();
   
   export{db, auth, provider}