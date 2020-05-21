import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCzhWtoEuKeekGim5RNlOombZxdlI6ywdk",
    authDomain: "e-commerce-app-db-f4458.firebaseapp.com",
    databaseURL: "https://e-commerce-app-db-f4458.firebaseio.com",
    projectId: "e-commerce-app-db-f4458",
    storageBucket: "e-commerce-app-db-f4458.appspot.com",
    messagingSenderId: "218674477324",
    appId: "1:218674477324:web:5160539f762245e80eb129",
    measurementId: "G-8GYJ8QPE07"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWtihGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;