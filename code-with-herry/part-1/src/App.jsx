import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [value, setValue] = useState(0)

  return (
    <>
     <div className='value'>
      {value}
     </div>
     <button onClick={()=>{setValue(value + 1)}}>incriment</button>
     <NavBar/>
    </>
  )
}

export default App
