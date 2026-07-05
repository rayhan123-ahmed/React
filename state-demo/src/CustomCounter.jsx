import { useReducer } from "react";

const init = (initial)=> {
  if (typeof initial === 'function') {
    return initial();
  }
  return initial

}


const useStateCustom = (initialValue) => {
  const reducer = (state, action) => {
    if (typeof action === 'function') {
      return action(state)
    }
     return action
  };
  const [state, dispatch] = useReducer(reducer, initialValue,init);

  const setState = (newValue)=> {
    dispatch(newValue)
  }
  return [state, setState]
};

export const CoustmCounter = ()=> {
  const [count,setCount] = useStateCustom(0)
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={()=> setCount((prev) => prev + 1)}>Incriment</button>
      <button onClick={()=> setCount((prev)=> prev - 1)}>Dicriment</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}