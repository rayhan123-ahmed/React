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
import { ProductList } from "./ProductList.jsx";
import { NameList } from "./NameList.jsx";
import { TodoList } from "./TodoList.jsx";
import { Alert } from "./Alert .jsx";
import { Contact } from "./Contact.jsx";
import { NewsLatter } from "./NewsLatter.jsx";
import { Menu } from "./Menu.jsx";

import { CustomButton } from "./CustomButton.jsx";

export const App = () => {
  return (
    <div>
      <Menu />
      <Contact />
      <NewsLatter />
      <CustomButton text="like" />
      <Alert>Youre chnage has been saved</Alert>
      <Alert type="error">something went wrong</Alert>
      <TodoList />
      <NameList />
      <ProductList />

      <UserDetails
        name="rayhan"
        isOnline={true}
        hideOffline={false}
        isPremimum={true}
        role="admin"
      />
      <UserDetails
        name="sifat"
        isOnline={true}
        hideOffline={true}
        isPremimum={true}
        role="vip"
      />

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
