import { useReducer } from "react";

const initalValue = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_VALUE":
        if (typeof action.payload === 'function') {
            return action.payload(state)
        }
      return action.payload;
    default:
      return state;
  }
};
const init = (value)=>{
  return value + 10
}

export const CustomSet = () => {
  const [count, setCount] = useReducer(reducer, initalValue,init);

  return (
    <div>
      <h1>${count}</h1>
      <button
        onClick={() => setCount({ type: "NEW_VALUE", payload: (prev)=> prev + 5 })}
      >
        Incriment
      </button>
      <button
        onClick={() => setCount({ type: "NEW_VALUE", payload: (prev) => prev - 1 })}
      >
        Dicriment
      </button>
      <button
        onClick={() => setCount({ type: "NEW_VALUE", payload: initalValue })}
      >
        Reset
      </button>
    </div>
  );
};
