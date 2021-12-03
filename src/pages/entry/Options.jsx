import { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import ScoopOptions from "./ScoopOptions";
import ToppingOptions from "./ToppingOptions";
import AlertBanner from "../common/AlertBanner";

const Options = (props) => {
  const { optionType } = props;

  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  // optionType is 'scoops' or 'toppings' 
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then(response => setItems(response.data))
      .catch(error => {
        setError(error);
      });
  }, [optionType]);

  // TODO: replace 'null' with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingOptions;

  const optionItems = items.map((item, index) => <ItemComponent
    key={`key_index${index + 1}`}
    optionType={optionType}
    name={item.name}
    magePath={item.imagePath}
  />);

  if (error) {
    return <AlertBanner />
  }

  return <Row>
    {optionItems}
  </Row>
};

export default Options;