import React from "react";

export default function Friend({ user }) {
  const { name, username, email } = user;

  return (
    <div
      style={{
        border: "2px solid red",
        marginTop: "5px",
        textAlign: "center",
        width: "40%",
      }}
    >
      <h2>Name:{name}</h2>
      <h3>User Name: {username}</h3>
      <h4>Email: {email}</h4>
    </div>
  );
}
