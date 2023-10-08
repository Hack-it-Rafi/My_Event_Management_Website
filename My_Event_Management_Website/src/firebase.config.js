// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl0YiNFaf3vFqHkqqUFCbbCguVJUvar9E",
  authDomain: "my-event-management-website.firebaseapp.com",
  projectId: "my-event-management-website",
  storageBucket: "my-event-management-website.appspot.com",
  messagingSenderId: "795282680141",
  appId: "1:795282680141:web:cc5b9cd6a89349c9e06f04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;