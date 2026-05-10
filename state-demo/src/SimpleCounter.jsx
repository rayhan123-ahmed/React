import { useState } from "react";

export const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  console.log("Render phase: Component Rendering with count", count);

  const HandleCount = () => {
    setCount(count + 1);
    console.log("after setCount(count + 1) count is:", count);
    setCount(count + 5);
    console.log("after setCount(count + 5) count is:", count);
    setCount(count + 10);
    console.log("after setCount(count + 10) count is:", count);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={HandleCount}>Incriment</button>
    </div>
  );
};
