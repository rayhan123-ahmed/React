import { useState } from "react";

export const Count = ()=>{
    const [count,setCount] = useState(0);
    

    const Handleclick = ()=>{
        setCount(count+1)
    }

    return(
        <div>
            <p>count: {count}</p>
            <button onClick={Handleclick}>Incriment</button>
        </div>
    )
}