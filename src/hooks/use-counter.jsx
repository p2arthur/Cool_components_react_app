import { useState, useEffect } from "react";

//Custom hook
function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => console.log(count), [count]);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return { count, incrementCounter };
}

export default useCounter;
