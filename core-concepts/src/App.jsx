
import './App.css'
 

function Welcome() {
  return <h2>welcome mobin</h2>
}

function Button () {
   return <button>Click me </button>
}

function App() {
  return (
    <div>
      <h1>React course</h1>
      <Welcome />
      <Button />
    </div>
  );
}

export default App
