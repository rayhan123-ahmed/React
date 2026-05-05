
import './App.css'
import {Welcome} from './welcome.jsx';
import {Button} from './button.jsx';
import { Hello,HelloWithoutJSX } from './Hello.jsx';
import { UserProfile } from './userProfile.jsx';




export const App = () => {
  return (
    <div>
      <UserProfile />
      <Hello />
      <HelloWithoutJSX />
      <Welcome />
      <Button />
    </div>
  );
}

export default App
