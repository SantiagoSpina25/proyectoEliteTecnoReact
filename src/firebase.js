import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA2RJk0rVekm3-CLFXrGRl-TQQ4z-Km18I",
  authDomain: "elitetecnoreact.firebaseapp.com",
  projectId: "elitetecnoreact",
  storageBucket: "elitetecnoreact.appspot.com",
  messagingSenderId: "187764478254",
  appId: "1:187764478254:web:74267f34b57c1d6585aabf"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

