import { useState } from "react";

export const LoginCard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const HandleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const [message, setMessage] = useState("");

  const HandleMessage = (event) => {
    setMessage(event.target.value);
  };
  return (
    <>
      <button onClick={HandleClick}>{isLoggedIn ? "logout" : "login"}</button>
      <input
        type="text"
        placeholder="send a message"
        value={message}
        onChange={HandleMessage}
      />
      <p>{message}</p>
    </>
  );
};
