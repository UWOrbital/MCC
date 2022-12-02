import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { getAnalytics } from "firebase/analytics";

import ARO from "./components/ARORequests";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import MissionCommands from "./components/MissionCommands";
import TelemetryData from "./components/TelemetryData";
import Logs from "./components/Logs";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
  authDomain: "todo-app-e3cf0.firebaseapp.com",
  projectId: "todo-app-e3cf0",
  storageBucket: "todo-app-e3cf0.appspot.com",
  messagingSenderId: "940016886081",
  appId: "1:940016886081:web:91686613f16b1b1f8001c0",
  measurementId: "G-JHPC7TP12K"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
export const firestore = firebase.firestore();

export default firebase;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="missioncommands" element={<MissionCommands />} />
        <Route path="telemetrydata" element={<TelemetryData />} />
        <Route path="arorequests" element={<ARO />} />
      </Routes>
      <Logs />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
