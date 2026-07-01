import "./App.css";
import { PrevStateCounter } from "./PrevStateCounter";
import { BachingCounter } from "./BatchingCounter";
import { UserProfile } from "./UseProfile";;
import { CounterWithInit } from "./CounterWithInit";
import { CustomSet } from "./CustomCounter";
import { Counter } from "./Count";
import {LoginCard} from './LoginCard'
import { Dashboard } from "./UseDashBoard";
import {SimpleCounter} from './SimpleCounter'
import { TodoList } from "./TodoList";
import { ShoppingCart } from "./shoppingCart";
import { CounterWithReducer } from "./CounterWithReducer";
import { ShoppingCartWithReducer } from "./ShoppingCartWithreducer";

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
      <CounterWithReducer/>
      <ShoppingCartWithReducer />
     

      {/* <CounterWithInit /> *
      <UserProfile />
      <SimpleCounter />
      <Count />
      <BachingCounter />   */}
    </>
  );
}

export default App;
