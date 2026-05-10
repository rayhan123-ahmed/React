import { useState } from "react";

export const UserDashBoard = ({ isPremium }) => {
  const [Cradits, setCredits] = useState(100);
  if (!isPremium) {
    return <p>Upgrade to premium to see the credits</p>;
  }
  return (
    <div>
      <p>You have{Cradits} Credits</p>
      <button
        onClick={() => {
          setCredits(0);
        }}
      ></button>
    </div>
  );
};
