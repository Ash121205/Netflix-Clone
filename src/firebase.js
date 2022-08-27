// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0Q3mun-M5gggPzf_Hqx0kpS65_mbMvNA",
  authDomain: "netflix-clone-90117.firebaseapp.com",
  projectId: "netflix-clone-90117",
  storageBucket: "netflix-clone-90117.appspot.com",
  messagingSenderId: "439713966882",
  appId: "1:439713966882:web:8212c86136f43424da937b",
  measurementId: "G-SWT0KMELVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
