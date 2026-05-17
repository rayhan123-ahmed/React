import "./App.css";
import { Count } from "./Count";
import { LoginCard } from "./LoginCard";
import { UserDashBoard } from "./UseDashBoard";
import { SimpleCounter } from "./SimpleCounter";
import { PrevStateCounter } from "./PrevStateCounter";
import { BachingCounter } from "./BatchingCounter";
import { UserProfile } from "./UseProfile";
import { TodoList } from "./TodoList";
import { ShoppingCart } from "./ProductCart";
import { CounterWithReducer } from "./CounterWithReducer";
import { ShoppingCartWithreducer } from "./ShoppingCartWithreducer";
import { CounterWithInit } from "./CounterWithInit";

function App() {
  return (
    <>
       <CounterWithInit /> *
       {/* <ShoppingCartWithreducer />
     <CounterWithReducer />
      <ShoppingCart />
      <TodoList />
      <UserProfile />
      <PrevStateCounter />
      <SimpleCounter />
      <UserDashBoard />
      <LoginCard />
      <Count />
      <BachingCounter />  */}
    </>
  );
}

export default App;
