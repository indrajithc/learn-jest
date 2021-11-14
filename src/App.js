import { useState } from "react";

export const replaceCamelWithSpaces = (colorName) => `${colorName}`.replace(/\B([A-Z])\B/g, ` $1`);

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

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
      <button style={{ backgroundColor: buttonDisabled ? 'grey' : buttonColor }}
        onClick={clickHandler}
        disabled={buttonDisabled}
      >Change to {replaceCamelWithSpaces(newButtonColor)}</button>
      <input
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={buttonDisabled}
        area-checked={buttonDisabled ? "true" : "false"}
        onChange={changeHandler}
      />
      <label htmlFor="enable-button-checkbox">Disable button</label>
    </div>)
};

export default App;
