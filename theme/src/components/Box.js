import React from "react";

const Box = ({ children }) => {
  return (
    <div
      style={{ backgroundColor: "tomato", padding: "2rem", margin: "1rem 0" }}
    >
      {children}
    </div>
  );
};

export default Box;
