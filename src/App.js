import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState('red');

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const clickHandler = () => {
    setButtonColor(newButtonColor);
  }

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={clickHandler} >Change to {newButtonColor}</button>
    </div>)
};

export default App;
