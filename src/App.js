import React from "react";
import "./App.css";
import { ContractorCalculator } from "./Pages/ContractingCalculator";
import { Show } from "./Pages/Show";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ContractorCalculator />} />
          <Route path="/:id" element={<Show />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
