import { useState } from "react";

export function LoginCard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [massage, setMassage] = useState("");

  function HandleClick() {
    setIsLoggedIn(!isLoggedIn);
  }

  function HandleMassage(event) {
    setMassage(event.target.value);
  }

  return (
    <>
      <button onClick={HandleClick}>{isLoggedIn ? "login" : "logout"}</button>

      <input
        placeholder="type massage"
        value={massage}
        onChange={HandleMassage}
      />
      <p>{massage}</p>
    </>
  );
}
