import { UserInfo } from "./UserInfo";

export const UserCard = ({ id, ...rest }) => {
  return (
    <div>
      <h1>user {id} detail</h1>
      <UserInfo {...rest} />
    </div>
  );
};
