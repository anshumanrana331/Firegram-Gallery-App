import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBwYIvuagb6nmC84YfAVy8sIEy9_tsErH0",
    authDomain: "firegram-25b61.firebaseapp.com",
    projectId: "firegram-25b61",
    storageBucket: "firegram-25b61.appspot.com",
    messagingSenderId: "1028247022367",
    appId: "1:1028247022367:web:41fdc28a5be0a076b7de2a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };