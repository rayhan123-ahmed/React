import "./App.css";
import { PrevStateCounter } from "./PrevStateCounter";
import { BachingCounter } from "./BatchingCounter";
import { UserProfile } from "./UseProfile";;
import { Counter } from "./Count";
import {LoginCard} from './LoginCard'
import { Dashboard } from "./UseDashBoard";
import {SimpleCounter} from './SimpleCounter'
import { TodoList } from "./TodoList";
import { ShoppingCart } from "./shoppingCart";
import { CounterWithReducer } from "./CounterWithReducer";
import { ShoppingCartWithReducer } from "./ShoppingCartWithreducer";
import { CounterwithInit } from "./CounterWithInit";
import { CoustmCounter } from "./CustomCounter";

function App() {
  return (
    <>
      <PrevStateCounter />
      <Counter />
      <LoginCard />
      <Dashboard/>
      <SimpleCounter/>
      <TodoList/>
      <ShoppingCart />
      <CounterWithReducer/>
      <ShoppingCartWithReducer />
      <CounterwithInit />
     <CoustmCounter />

      {/*  
      <UserProfile />
      <SimpleCounter />
      <Count />
      <BachingCounter />   */}
    </>
  );
}

export default App;
