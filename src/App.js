import React from "react";
import "./App.css";
import { ContractorCalculator } from "./Pages/ContractingCalculator";
import { Show } from "./Pages/Show";
import { Contacts } from "./Pages/Contacts";
import { Projects } from "./Pages/Projects";
import { Todo } from "./Pages/Todo";

import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ContractorCalculator />} />
          <Route path="/:id" element={<Show />} />
          <Route exact path="/projects" component={<Projects />} />
          <Route exact path="/contacts" component={<Contacts />} />
          <Route exact path="/todo" component={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
