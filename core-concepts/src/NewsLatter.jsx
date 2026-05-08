import { ActionButton } from "./ActionButton";

export const NewsLatter = () => {
  const HandleNews = () => {
    alert("Channel Subscribe");
  };
  return (
    <div>
      <h1>Subscribe to NewsLatter</h1>
      <ActionButton text="Subscribe" onClick={HandleNews} />
    </div>
  );
};
