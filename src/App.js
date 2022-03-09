import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import MissionCommands from "./components/MissionCommands";
import TelemetryData from "./components/TelemetryData";
import ARORequests from "./components/ARORequests";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <MissionCommands />
      <TelemetryData />
      <ARORequests />
    </>
  );
}

export default App;
