import "./App.css";
import { Header } from "./Header";
import { UserContext } from "./UserContext";

function App(){
  const user = {
    name : 'bruce',
    role : 'Admin',
    theme : 'dark'
  }
  return (
    <UserContext value={user}>
      <div>
        <h1>Dashboard</h1>
        <Header />
      </div>
    </UserContext>
  );
}



export default App
