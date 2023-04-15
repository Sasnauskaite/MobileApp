// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwLU7dnuQ_eOmp2zk3Ky8lS-4qxNYGfgQ",
  authDomain: "sellart-s.firebaseapp.com",
  projectId: "sellart-s",
  storageBucket: "sellart-s.appspot.com",
  messagingSenderId: "1034032513664",
  appId: "1:1034032513664:web:254e06f2de191e2a111c65"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };