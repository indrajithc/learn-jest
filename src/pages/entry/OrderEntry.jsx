import Options from "./Options";

const OrderEntry = (props) => {

  return (<div>
    <Options optionType="scoops" />
    <Options optionType="toppings" />
  </div>);
}

export default OrderEntry;