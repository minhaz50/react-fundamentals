export default function Post({ post }) {
  const { userId, title, body } = post;
  return (
    <div
      style={{
        border: "2px solid red",
        marginTop: "5px",
        textAlign: "center",
        width: "40%",
      }}
    >
      <h2>UserId: {userId}</h2>
      <h4>Title: {title}</h4>
      <p>{body}</p>
    </div>
  );
}
