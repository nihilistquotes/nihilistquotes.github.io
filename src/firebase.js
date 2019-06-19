import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCsHEQSqQn4swAtlbU3TWGpm75dLM52YLs",
  authDomain: "quotes-by-su.firebaseapp.com",
  databaseURL: "https://quotes-by-su.firebaseio.com",
  projectId: "quotes-by-su",
  storageBucket: "quotes-by-su.appspot.com",
  messagingSenderId: "1029877557040",
  appId: "1:1029877557040:web:dc6a226211e586f3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
