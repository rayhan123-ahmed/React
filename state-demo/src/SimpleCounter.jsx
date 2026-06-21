import { useState } from "react";

export const SimpleCounter = () => {
  console.log("simple counter component render");

  const [count, setCount] = useState(0);

  const HandleClick = () => {
    console.log("before setCount count is", count);
    setCount(count + 2);
    console.log("after setCount count is", count);
  };

  return (
    <div>
      <p>Count :{count}</p>
      <button onClick={HandleClick}>Incriment</button>
    </div>
  );
};
