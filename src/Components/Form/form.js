import React from "react";

export const Form = ({
  roomName,
  firstDim,
  secondDim,
  onFormChange,
  onFormSubmit,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };

  const handleChange = (event) => {
    onFormChange(event);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Room Name</p>
        <input
          type="text"
          value={roomName}
          name="roomName"
          onChange={handleChange}
        ></input>
        <p>Length (ft)</p>
        <input
          type="number"
          min="0"
          step="0.1"
          required
          value={firstDim}
          name="firstDimension"
          onChange={handleChange}
        ></input>
        <p>Width (ft)</p>
        {
          <input
            type="number"
            min="0"
            step="0.1"
            required
            value={secondDim}
            name="secondDimension"
            onChange={handleChange}
          ></input>
        }
        <br></br>
        <input type="submit"></input>
      </form>
    </>
  );
};
