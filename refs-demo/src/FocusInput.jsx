import { useRef } from "react";

export const FocusInput = () => {
  const FocusRef = useRef(null);

  const handleFocusInput = () => {
    FocusRef.current.focus();
  };

  return (
    <div>
      <input ref={FocusRef} type="text" placeholder="input filed"></input>
      <button onClick={handleFocusInput}>focus input</button>
    </div>
  );
};
