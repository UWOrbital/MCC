import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCbfXcM1J1u8BVTK3CqxmcUFMvRWDylViY",
  authDomain: "uw-orbital-mcc.firebaseapp.com",
  projectId: "uw-orbital-mcc",
  storageBucket: "uw-orbital-mcc.appspot.com",
  messagingSenderId: "784474228563",
  appId: "1:784474228563:web:5b4eed8840a8b286cd83a6",
  measurementId: "G-JCYQQ2GLKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
