
import './App.css'
import {Welcome} from './welcome.jsx';
import {Button} from './button.jsx';
import { Hello,HelloWithoutJSX } from './Hello.jsx';




export const App = () => {
  return (
    <div>
      <Hello />
      <HelloWithoutJSX />
      <Welcome />
      <Button />
    </div>
  );
}

export default App
