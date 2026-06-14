import { useState } from "react";

export const Dashboard = ({isPremium})=>{
    const [credits, setCredits] = useState(100);

    if (!isPremium) {
      return (
        <p>get a premium to get access</p>
      )
    }

    return (
      <div>
        <p>Your {credits} credits</p>
        <button onClick={() => setCredits(0)}>reset credits</button>
      </div>
    );
}