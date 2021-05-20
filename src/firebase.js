// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCHFChYpCAJNqvlyzdLtB6ypfX6YmNYrng",
    authDomain: "fir-833ac.firebaseapp.com",
    projectId: "fir-833ac",
    storageBucket: "fir-833ac.appspot.com",
    messagingSenderId: "332594657429",
    appId: "1:332594657429:web:18b985f2f3b41655a1039c",
    measurementId: "G-LE4ZGD61KM"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { provider, auth };
  export default db;