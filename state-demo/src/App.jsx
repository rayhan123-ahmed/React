import "./App.css";
import { PrevStateCounter } from "./PrevStateCounter";
import { BachingCounter } from "./BatchingCounter";
import { UserProfile } from "./UseProfile";
import { ShoppingCart } from "./ProductCart";
import { CounterWithReducer } from "./CounterWithReducer";
import { ShoppingCartWithreducer } from "./ShoppingCartWithreducer";
import { CounterWithInit } from "./CounterWithInit";
import { CustomSet } from "./CustomCounter";
import { Counter } from "./Count";
import {LoginCard} from './LoginCard'
import { Dashboard } from "./UseDashBoard";
import {SimpleCounter} from './SimpleCounter'
import { TodoList } from "./TodoList";

function App() {
  return (
    <>
      <CustomSet />
      <PrevStateCounter />
      <Counter />
      <LoginCard />
      <Dashboard/>
      <SimpleCounter/>
      <TodoList/>

      {/* <CounterWithInit /> *
      <ShoppingCartWithreducer />
     <CounterWithReducer />
      <ShoppingCart />
      <UserProfile />
      <SimpleCounter />
      <Count />
      <BachingCounter />   */}
    </>
  );
}

export default App;
