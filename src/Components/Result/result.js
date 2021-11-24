import React from "react";

export const Result = ({ result, roomName }) => {
  return (
    <>
      <h2>
        Area of {roomName}: {result}ft<sup>2</sup>
      </h2>
      <input type="submit" value="Save Room"></input>
    </>
  );
};
