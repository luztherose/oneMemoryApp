import firebase from 'firebase/app';
import 'firebase/database';

 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByQfh4ZpdiIzPV324W4n9SnIIILLl_v1g",
    authDomain: "onememoryapp-d4ec6.firebaseapp.com",
    databaseURL: "https://onememoryapp-d4ec6.firebaseio.com",
    projectId: "onememoryapp-d4ec6",
    storageBucket: "onememoryapp-d4ec6.appspot.com",
    messagingSenderId: "867043533998",
    appId: "1:867043533998:web:da7f0633e196d1d789793f"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
