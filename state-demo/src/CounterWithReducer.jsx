import { useReducer } from "react";

const initialState = 0;

const Reducer = (state,action)=>{
  switch(action){
    case 'incriment' :
      return state + 1
      case 'decrement' :
        return state - 1
        case 'reset' :
          return initialState
          default :
          return state
  }

}

export const CounterWithReducer = ()=>{
    const [count,dispatch] = useReducer(Reducer,initialState)

    return (
      <div>
        <p>count : {count}</p>
        <button onClick={() => dispatch("incriment")}>Incriment</button>
        <button onClick={() => dispatch("decrement")}>decrement</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      </div>
    );
}