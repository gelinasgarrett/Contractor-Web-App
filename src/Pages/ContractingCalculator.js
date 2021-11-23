import React, { useState, useEffect } from "react";
//import { Card } from "../Components/Card/card";
import { Form } from "../Components/Form/form";
import { Result } from "../Components/Result/result";

export const ContractorCalculator = () => {
  const [state, setState] = useState({
    firstDimension: "",
    secondDimension: "",
    roomName: "",
  });
  const [result, setResult] = useState("");
  useEffect(() => {}, []);

  const handleFormChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const handleFormSubmit = () => {
    const area = (state.firstDimension * state.secondDimension).toFixed(2);
    setResult(area);
  };

  return (
    <>
      <header>
        <h1>Contracting Calculator</h1>
      </header>
      <div className="grid-2">
        <div className="section-1">
          <h2>Square Footage</h2>
          <Form
            roomName={state.roomName}
            firstUserInput={state.firstDimension}
            secondUserInput={state.secondDimension}
            onFormChange={handleFormChange}
            onFormSubmit={handleFormSubmit}
          />
          {/*       <Card listOfCalculations={calculation} />
           */}{" "}
        </div>

        <div className="section-2">
          {<Result result={result} roomName={state.roomName} />}
        </div>

        <div className="section-3">
          <h2>Saved Rooms</h2>
        </div>
      </div>
    </>
  );
};
