import React from "react";
import ReactDOM from "react-dom/client";

const JsxHeading = () => {
  return (
    <React.Fragment>
      <h1 className="heading">namaste react using jsx  root 🚀</h1>
      <h1 className="heading">namaste react using jsx  root 🚀</h1>

     
    </React.Fragment>
  );
};

const Krishna = () => {
  return(
  <>
    <h1>namaste react using react component 🚀root1  </h1>
    <h1>namaste react using react component 🚀 root1 </h1>
  </>
  )
};



const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root.render(<JsxHeading />);
root1.render(<Krishna />);