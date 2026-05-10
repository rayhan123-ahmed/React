import "./App.css";
import { Count } from "./Count";
import { LoginCard } from "./LoginCard";
import { UserDashBoard } from "./UseDashBoard";
import { SimpleCounter } from "./SimpleCounter";

function App() {
  return (
    <>
      <SimpleCounter />
      <UserDashBoard />
      <LoginCard />
      <Count />
    </>
  );
}

export default App;
