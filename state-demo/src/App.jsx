import "./App.css";
import { Count } from "./Count";
import { LoginCard } from "./LoginCard";
import { UserDashBoard } from "./UseDashBoard";
import { SimpleCounter } from "./SimpleCounter";
import { PrevStateCounter } from "./PrevStateCounter";

function App() {
  return (
    <>
    <PrevStateCounter />
      <SimpleCounter />
      <UserDashBoard />
      <LoginCard />
      <Count />
    </>
  );
}

export default App;
