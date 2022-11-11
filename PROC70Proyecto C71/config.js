import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCaDr6SoXKY41YBcqRkbJaJkiVa6kspSZo",
    authDomain: "travesia-digital-54e07.firebaseapp.com",
    projectId: "travesia-digital-54e07",
    storageBucket: "travesia-digital-54e07.appspot.com",
    messagingSenderId: "194576734685",
    appId: "1:194576734685:web:a5f8b6c27610fe3276fe34"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();