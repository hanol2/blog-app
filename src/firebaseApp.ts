// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import "firebase/auth"
import { getFirestore} from 'firebase/firestore'

export let app : FirebaseApp;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey:  process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId:process.env.REACT_APP_MESSAGING_SENTER_ID,
//   appId: process.env.REACT_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyDUHzrSeW1-T5D-aY3UNRelovpQ7gAgb5Q",
  authDomain: "fastcampus-react-blog-2e225.firebaseapp.com",
  projectId: "fastcampus-react-blog-2e225",
  storageBucket: "fastcampus-react-blog-2e225.appspot.com",
  messagingSenderId: "468882163317",
  appId: "1:468882163317:web:83743b952bfd84a2605a3c"
};

try {
  app = getApp("app")
} catch (e){
  app = initializeApp(firebaseConfig, "app")
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)

export const db = getFirestore(app);

export default firebase;