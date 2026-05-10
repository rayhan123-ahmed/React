 import { useState } from "react";

 export const BachingCounter = () => {
   const [count, setCount] = useState(0);
   const [name,setName] = useState('');
   const [isActive,setIsActive] = useState(false)
   console.log("Render phase: Component Rendering");

   const HandleCount = () => {
     setCount(prev =>{
        return prev + 1;
     });
     setCount(prev => {
        return prev + 5;
     });
     setCount(prev => {
        return prev + 10;
     });
     setName('Updated');
     setIsActive(true)
   };

   return (
     <div>
       <p>Count: {count}</p>
       <p>name :{name}</p>
       <p>Active: {isActive ? 'yes' : 'no'}</p>
       <button onClick={HandleCount}>Update all three</button>
     </div>
   );
 };
