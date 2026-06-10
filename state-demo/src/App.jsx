import "./App.css";
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
import { CustomSet } from "./CustomCounter";
import { Counter } from "./Count";
import {LoginCard} from './LoginCard'

function App() {
  return (
    <>
      <CustomSet />
      <PrevStateCounter />
      <Counter />
      <LoginCard />

      {/* <CounterWithInit /> *
      <ShoppingCartWithreducer />
     <CounterWithReducer />
      <ShoppingCart />
      <TodoList />
      <UserProfile />
      <SimpleCounter />
      <UserDashBoard />
      <Count />
      <BachingCounter />   */}
    </>
  );
}

export default App;
