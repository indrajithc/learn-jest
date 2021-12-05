import { createContext, useContext, useState, useMemo } from "react";
import { pricePerItem } from "../constants";

const OrderDetails = createContext();

// create custom hook to check whether we are inside a provider
export function useOrderDetails() {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error("useOrderDetails must be used within an OrderDetailsProvider");
  }

  return context;
}

export function OrderDetailsProvider(props) {

  const [optionCounts, setOptionCount] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  const [totals, setTotals] = useState({
    scoops: 0,
    toppings: 0,
    grandTotal: 0
  });

  const calculateSubtotal = useCallback((optionType, optionCounts) => {
    let optionCount = 0;
    for (const count of optionCounts[optionType].values()) {
      optionCount += count;
    }

    return optionCount * pricePerItem[optionType];
  }, [])

  useEffect(() => {
    const scoopsSubtotal = calculateSubtotal("scoops", optionCounts);
    const toppingSubtotal = calculateSubtotal("toppings", optionCounts);
    const grandTotal = scoopsSubtotal + toppingSubtotal;
    setTotals({
      scoops: scoopsSubtotal,
      toppings: toppingSubtotal,
      grandTotal
    });
  }, [optionCounts, calculateSubtotal]);

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, optionType) {
      const newOptionCounts = { ...optionCounts };

      // update option count for this item with the new value
      const optionCountsMap = newOptionCounts[optionType];
      optionCountsMap.set(itemName, parseInt(newItemCount));

      setOptionCount(newOptionCounts);
    }

    // getter: object containing options counts for scoops and toppings, subtotal and totals
    // setter: updateOptionCount
    return [
      { ...optionCounts },
      updateItemCount
    ];
  }, [optionCounts]);

  return <OrderDetails.Provider value={value} {...props} />
}