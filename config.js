import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCoX_By7cHfa2930DTX1rdvsth_-zkdAso",
    authDomain: "voting-app-12a91.firebaseapp.com",
    databaseURL: "https://voting-app-12a91-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "voting-app-12a91",
    storageBucket: "voting-app-12a91.appspot.com",
    messagingSenderId: "127549694103",
    appId: "1:127549694103:web:a2f6009e80688c8ee089d2",
    measurementId: "G-7F0Q9P80WD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.database();