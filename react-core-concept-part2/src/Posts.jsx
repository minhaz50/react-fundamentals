import { use } from "react";
import Post from "./Post";

export default function Posts({ fetchPost }) {
  const posts = use(fetchPost);
  console.log(posts);
  return (
    <div>
      <h2>Posts Length: {posts.length}</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
