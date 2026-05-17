import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "incriment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const init = (initilValue) => {
  console.log("init function called - and this only runs once");

  const savedCount = localStorage.getItem("count");

  if (savedCount !== null) {
    console.log("Found savedCount", savedCount);
    return JSON.parse(savedCount);
  }
  console.log("No save count, using inital value:", initilValue);
  return initilValue;
};

export const CounterWithInit = () => {
  const [count, dispatch] = useReducer(reducer, initialState, init);
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => dispatch("incriment")}>incriment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};
