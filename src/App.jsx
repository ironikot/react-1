import React from "react";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  return (
    <React.Fragment>
      <h1>こんにちは</h1>
      <p1>どうも</p1>
      <button onClick={onClickButton}>button</button>
    </React.Fragment>
  );
};

export default App;
