import React from "react";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p1 style={contentStyle}>どうも</p1>
      <button onClick={onClickButton}>button</button>
    </React.Fragment>
  );
};

export default App;
