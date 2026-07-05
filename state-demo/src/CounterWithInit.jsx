import { useReducer } from "react";

const initialState = 0;

const Reducer = (state, action) => {
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

const init = (initialValue) => {
  console.log("init funtion count - this is the only times it runs");

  const saveCount = localStorage.getItem("count");

  if (saveCount !== null) {
    console.log("found save count:", saveCount);

    
    return parseInt(saveCount);
  }
  console.log("no save count, using initial value :", initialValue);

  return initialValue;
};

export const CounterwithInit = () => {
  const [count, dispatch] = useReducer(Reducer, initialState, init);

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={() => dispatch("incriment")}>Incriment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};
