import { useState } from "react";

export const UserProfile = () => {

  const [user, setUser] = useState({
    name: "Rayhan",
    age: 29,
    email: "rmd09181@gmail.com",
    address:{
        city: 'dhaka',
        country: 'bd'
    }
  });

  console.log("component rendaring, user", user);

  const handleTask = () => {
    setUser({
        // useing spread operator to pass all the object data into the setUser
      ...user,
      name: "Rifat",
    });
  };
  const UpdateAge = ()=>{
     setUser({
        ...user,
        age: user.age + 1,
     })
  }
  const UpdateMultiple = ()=>{
    setUser({
        ...user,
        name: 'sifat',
        age: user.age+2,
    })
  }
  const UpdateCity = ()=>{
     setUser({
       ...user,
       address: {
         ...user.address,
         city: "mirpur",
       },
     });
  }

  return (
    <div>
      <h1>name: {user.name}</h1>
      <p>city :{user.address.city}</p>
      <p>country :{user.address.country}</p>
      <p>age : {user.age}</p>
      <p>email: {user.email}</p>
      <button onClick={handleTask}>change the name into Rifat</button>
      <button onClick={UpdateAge}>Incriment age</button>
      <button onClick={UpdateMultiple}>Update Multiple</button>
      <button onClick={UpdateCity}>Move to new mirpur</button>
    </div>
  );
};
