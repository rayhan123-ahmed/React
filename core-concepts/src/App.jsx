import "./App.css";
import { Welcome } from "./welcome.jsx";
import { Button } from "./button.jsx";
import { Hello, HelloWithoutJSX } from "./Hello.jsx";
import { UserProfile } from "./userProfile.jsx";
import { ContactForm } from "./contactForm.jsx";
import { CandidatesProfile } from "./candidatesProfile.jsx";
import { Product } from "./product.jsx";
import { Greeting } from "./greeting.jsx";
import { CardWrapper } from "./CardWrapper.jsx";
import { UserDetails } from "./UserDetails.jsx";

export const App = () => {
  return (
    <div>
    <UserDetails name= 'rayhan' isOnline={false} />
    <UserDetails name= 'sifat' isOnline={true} hideOffline={true} />

      <CardWrapper title="user profile">
        <div>
          <p>rayhan</p>
          <p>rmd09181@gmail.com</p>
          <button>Profile Button</button>
        </div>
      </CardWrapper>

      <Greeting name="rifat" massage="hey" />
      <Greeting name="sifat" />
      <Greeting massage="hey" />
      <Greeting />

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
};

export default App;
