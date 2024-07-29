import React from "react";
import ReactDOM from "react-dom";

const heading = {
  color: "red",
  fontSize: "24px",
  border: "1px dotted blue",
};
heading.color = "green";

ReactDOM.render(
  <h1 style={heading}>Hello World!</h1>,
  document.getElementById("root")
);
