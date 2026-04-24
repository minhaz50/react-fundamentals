import { Suspense } from "react";
import BatsmanScore from "./BatsmanScore";
import Buttons from "./Buttons";
import Counter from "./Counter";
import From from "./From";
import Hello from "./Hello";
import Input from "./Input";
import Users from "./Users";
import Posts from "./Posts";

// const fetchUsers = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function App() {
  // const users = fetchUsers();

  const fetchPost = fetchPosts();
  // const handleClick = () => {
  //   alert("I am clicked.");
  // };

  // function handleClick2() {
  //   alert("I am clicked2");
  // }

  return (
    <>
      {/* <Suspense fallback={<h2>Loading....</h2>}>
        <Users users={users}></Users>
      </Suspense> */}

      <Suspense fallback={<h3>Loading posts.....</h3>}>
        <Posts fetchPost={fetchPost} />
      </Suspense>

      {/* 
      <button onClick={handleClick}>Clicks</button>
      <button onClick={handleClick2}>Click2</button>
      <Buttons />
      <Hello />
      <br />
      <Counter />
      <BatsmanScore />
      <br />
      <Input />
      <br />
      <From /> */}
    </>
  );
}

export default App;
