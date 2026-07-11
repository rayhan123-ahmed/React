import { useState,useRef } from "react";


export const StopWatch = ()=>{
    const [time,setTime] = useState(0)
    const intervelRef = useRef(null)

 const start = ()=> {
    intervelRef.current = setInterval(()=>{
       setTime((prev)=> prev+1)
    },1000)
 }
 const stop = ()=>{
    clearInterval(intervelRef.current)
 }
    return <div>
        <h1>Time : {time}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
    </div>
}