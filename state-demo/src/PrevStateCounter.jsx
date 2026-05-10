 import { useState } from "react";

 export const PrevStateCounter = () => {
   const [count, setCount] = useState(0);
   console.log("Render phase: Component Rendering with count", count);

   const HandleCount = () => {
     setCount(prev =>{
        console.log('First updater fn: prev count =',prev);
        return prev + 1;
     });
     console.log("after setCount(prev => prev + 1) count is:", count);

     setCount(prev => {
        console.log("Second updater fn: prev count =", prev);
        return prev + 5;
     });
     console.log("after setCount(prev => prev + 5) count is:", count);

     setCount(prev => {
       console.log("Third updater fn: prev count =", prev);
        return prev + 10;
     });
     console.log("after setCount(prev => prev+ 10) count is:", count);
   };

   return (
     <div>
       <p>Count: {count}</p>
       <button onClick={HandleCount}>Incriment</button>
     </div>
   );
 };
