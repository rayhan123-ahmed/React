import { use } from "react";
import { UserContext } from "./UserContext";

export const Avatar = ({isLoggedIn = true}) => {
  const {user, setUser} = use(UserContext);

  if (isLoggedIn) {
    return <div>data is loading....</div>;
  }

  const toggleTheme = () => {
    setUser({
      ...user,
      theme: user.theme === 'dark' ? 'light' : 'dark'
    });
  };

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <p>current theme : {user.theme}</p>
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );
};
