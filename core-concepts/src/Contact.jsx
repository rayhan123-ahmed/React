import { ActionButton } from "./ActionButton";

export const Contact = () => {
  const HandleMessage = () => {
    alert("Button clicked");
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <ActionButton text="send Message" onClick={HandleMessage} />
    </div>
  );
};
