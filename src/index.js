import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { initializeApp } from "firebase/app";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { getAnalytics } from "firebase/analytics";

import ARO from "./components/ARORequests";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import MissionCommands from "./components/MissionCommands";
import TelemetryData from "./components/TelemetryData";
import Logs from "./components/Logs";

const firebaseConfig = {
  apiKey: "AIzaSyCbfXcM1J1u8BVTK3CqxmcUFMvRWDylViY",
  authDomain: "uw-orbital-mcc.firebaseapp.com",
  projectId: "uw-orbital-mcc",
  storageBucket: "uw-orbital-mcc.appspot.com",
  messagingSenderId: "784474228563",
  appId: "1:784474228563:web:5b4eed8840a8b286cd83a6",
  measurementId: "G-JCYQQ2GLKV"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

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
