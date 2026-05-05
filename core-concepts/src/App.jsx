
import './App.css'
import {Welcome} from './welcome.jsx';
import {Button} from './button.jsx';
import { Hello,HelloWithoutJSX } from './Hello.jsx';
import { UserProfile } from './userProfile.jsx';
import { ContactForm } from './contactForm.jsx';
import { CandidatesProfile } from './candidatesProfile.jsx';




export const App = () => {
  return (
    <div>
      <CandidatesProfile />
      <UserProfile />
      <Hello />
      <HelloWithoutJSX />
      <Welcome />
      <Button />
      <ContactForm />
    </div>
  );
}

export default App
