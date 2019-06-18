import firebase from 'firebase/app';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9CwRygWab6fktaCsjYzMOpiRaqVtZEoc",
    authDomain: "jc-react-firebase.firebaseapp.com",
    databaseURL: "https://jc-react-firebase.firebaseio.com",
    projectId: "jc-react-firebase",
    storageBucket: "",
    messagingSenderId: "210959621809",
    appId: "1:210959621809:web:3655b8b843357bfb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;