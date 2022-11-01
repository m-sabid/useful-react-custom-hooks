import { useState } from "react";

export function useCounter({value = 0, upperBound = 10, lowerBound = 0}) {
  const [count, setCount] = useState(value);

  // handel increment
  const handelInc = () => {
    if (count < upperBound) setCount(count + 1);
  };
  // handel decrement
  const handelDec = () => {
    if (count > lowerBound) setCount(count - 1);
  };


  return {
    count,
    handelInc,
    handelDec
  }
}
