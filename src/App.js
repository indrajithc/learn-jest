import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  /**
   * This function is used to change button color
   */
  const clickHandler = () => {
    setButtonColor(newButtonColor);
  }

  /**
   * This function is used to toggle checkbox
   */
  const changeHandler = () => setButtonDisabled(preState => !preState);

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }}
        onClick={clickHandler}
        disabled={buttonDisabled}
      >Change to {newButtonColor}</button>
      <input
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={buttonDisabled}
        area-checked={buttonDisabled ? "true" : "false"}
        onChange={changeHandler}
      />
    </div>)
};

export default App;
