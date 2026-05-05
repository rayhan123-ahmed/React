import './App.css'
import {Welcome} from './welcome.jsx';
import {Button} from './button.jsx';
import { Hello,HelloWithoutJSX } from './Hello.jsx';
import { UserProfile } from './userProfile.jsx';
import { ContactForm } from './contactForm.jsx';
import { CandidatesProfile } from './candidatesProfile.jsx';
import { Product } from './product.jsx';
import { Greeting } from './greeting.jsx';




export const App = () => {
  return (
    <div>
       <Greeting name='rifat' massage='hey' />
       <Greeting name='sifat' />
       <Greeting  massage='hey' />
       <Greeting  />

      <Welcome name="rayhan" alis="superman" />
      <Welcome name="ahmed" alis="batman" />
      <Welcome name="rifat" alis="ironman" />
      <Product
        title="Laptop"
        price={299}
        Instock={true}
        Categories={["electornice", "gaming"]}
      />
      <CandidatesProfile />
      <UserProfile />
      <Hello />
      <HelloWithoutJSX />
      <Button />
      <ContactForm />
    </div>
  );
}

export default App
