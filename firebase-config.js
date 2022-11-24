// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPGpjBZMPSRX6EZcs0fHH9aoP_kuS9OKA",
  authDomain: "hack-bpit-6b66f.firebaseapp.com",
  projectId: "hack-bpit-6b66f",
  storageBucket: "hack-bpit-6b66f.appspot.com",
  messagingSenderId: "36430511491",
  appId: "1:36430511491:web:98cba8098e16a419240ab6",
  measurementId: "G-B92K400VSX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
