// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// this is for our storage  
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO9lkZBpbIP1P12bb3dTiuXHeuFMEaAE4",
  authDomain: "realtor-clone-react-js-6b949.firebaseapp.com",
  projectId: "realtor-clone-react-js-6b949",
  storageBucket: "realtor-clone-react-js-6b949.appspot.com",
  messagingSenderId: "280882278200",
  appId: "1:280882278200:web:303ad1cc08465876cd9bcd",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// export firestore 
export const db = getFirestore();
