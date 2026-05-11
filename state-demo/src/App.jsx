import "./App.css";
import { Count } from "./Count";
import { LoginCard } from "./LoginCard";
import { UserDashBoard } from "./UseDashBoard";
import { SimpleCounter } from "./SimpleCounter";
import { PrevStateCounter } from "./PrevStateCounter";
import { BachingCounter } from "./BatchingCounter";
import { UserProfile } from "./UseProfile";

function App() {
  return (
    <>
      <UserProfile />
      <PrevStateCounter />
      <SimpleCounter />
      <UserDashBoard />
      <LoginCard />
      <Count />
      <BachingCounter />
    </>
  );
}

export default App;
