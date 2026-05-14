import { useReducer } from "react"
const initialState = 0

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


export const CounterWithReducer = ()=>{
     const [count,dispatch] = useReducer(reducer,initialState)
    return (
      <div>
        <p>Count:{count}</p>
        <button onClick={() => dispatch("incriment")}>incriment</button>
        <button onClick={() => dispatch("decrement")}>decrement</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      </div>
    );
}