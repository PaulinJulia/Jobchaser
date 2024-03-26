import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD41UN5htNvFOimWb0Jc4ZeD6AZARiCIXA",
  authDomain: "jobchaser-e474e.firebaseapp.com",
  projectId: "jobchaser-e474e",
  storageBucket: "jobchaser-e474e.appspot.com",
  messagingSenderId: "574262331469",
  appId: "1:574262331469:web:48e99f54f6b2a1a36fb404",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
