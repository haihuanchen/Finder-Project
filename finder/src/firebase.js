import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDhbYbOpF2p7SXceiJIFw3fSSjXWsc04Mk",
    authDomain: "finder-project-bc661.firebaseapp.com",
    databaseURL: "https://finder-project-bc661.firebaseio.com",
    projectId: "finder-project-bc661",
    storageBucket: "finder-project-bc661.appspot.com",
    messagingSenderId: "776580234916",
    appId: "1:776580234916:web:6d016d64810c329f7e3031",
    measurementId: "G-LZ8VR3J44L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;