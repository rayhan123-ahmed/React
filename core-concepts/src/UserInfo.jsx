export const UserInfo = ({ name, age, city, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>age: {age}</p>
      <p>city: {city}</p>
      <p>email: {email}</p>
    </div>
  );
};
