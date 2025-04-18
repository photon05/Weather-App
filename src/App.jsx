import { useState } from "react";
import "./App.css";
import Weather from "./components/weather";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>This is the Weather App</h1>
      </div>
      <Weather />
    </div>
  );
}

export default App;
