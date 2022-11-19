import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDA2gFlZthr5b7J-7LreTFqfPGIjjjNTjA",
  authDomain: "credential-c14fd.firebaseapp.com",
  projectId: "credential-c14fd",
  storageBucket: "credential-c14fd.appspot.com",
  messagingSenderId: "288588454222",
  appId: "1:288588454222:web:ec17aad3fddac7dea8a61f",
  measurementId: "G-WGMY3NE492"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;