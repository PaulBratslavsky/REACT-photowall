  import * as firebase from 'firebase';
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAn2w_NTliYAl_SKHUrUMLf9hetDlhHuJ0",
    authDomain: "fakeagram-1412b.firebaseapp.com",
    databaseURL: "https://fakeagram-1412b.firebaseio.com",
    projectId: "fakeagram-1412b",
    storageBucket: "",
    messagingSenderId: "800459360651",
    appId: "1:800459360651:web:81c56ad763fbb410"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database();
