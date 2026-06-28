import "./App.css";
import { PrevStateCounter } from "./PrevStateCounter";
import { BachingCounter } from "./BatchingCounter";
import { UserProfile } from "./UseProfile";;
import { CounterWithReducer } from "./CounterWithReducer";
import { ShoppingCartWithreducer } from "./ShoppingCartWithreducer";
import { CounterWithInit } from "./CounterWithInit";
import { CustomSet } from "./CustomCounter";
import { Counter } from "./Count";
import {LoginCard} from './LoginCard'
import { Dashboard } from "./UseDashBoard";
import {SimpleCounter} from './SimpleCounter'
import { TodoList } from "./TodoList";
import { ShoppingCart } from "./shoppingCart";

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
      <ShoppingCart />
     

      {/* <CounterWithInit /> *
      <ShoppingCartWithreducer />
     <CounterWithReducer />
      <UserProfile />
      <SimpleCounter />
      <Count />
      <BachingCounter />   */}
    </>
  );
}

export default App;
