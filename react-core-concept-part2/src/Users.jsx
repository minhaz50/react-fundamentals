import { use } from "react";
import Friend from "./Friend";

export default function Users({ users }) {
  const usersList = use(users);

  console.log(usersList);
  return (
    <div style={{}}>
      <h1>Total Users:{usersList.length}</h1>
      {usersList.map((user) => (
        <Friend key={user.id} user={user}></Friend>
      ))}
    </div>
  );
}
