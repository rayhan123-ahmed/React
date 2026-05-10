import "./App.css";
import { Count } from "./Count";
import { LoginCard } from "./LoginCard";
import { UserDashBoard } from "./UseDashBoard";

function App() {
  return (
    <>
      <UserDashBoard />
      <LoginCard />
      <Count />
    </>
  );
}

export default App;
