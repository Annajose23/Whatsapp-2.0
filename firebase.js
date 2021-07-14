import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnO1dFyLYM7hqPafsNyOo3-TPpp1o1wvo",
    authDomain: "whatsapp-dd695.firebaseapp.com",
    projectId: "whatsapp-dd695",
    storageBucket: "whatsapp-dd695.appspot.com",
    messagingSenderId: "654649893896",
    appId: "1:654649893896:web:6a8f9f2d27ea60d939ddbd",
    measurementId: "G-NFR2XDDZMC"
  };

  const app = !firebase.apps.length? firebase.initializeApp(firebaseConfig): firebase.app();

  const db = app.firestore();

  const auth = app.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};