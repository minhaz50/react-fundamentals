import React from "react";

export default function PropsPractice() {
  return (
    <div>
      <Welcome name="Minhaz" isStudent="true" />
    </div>
  );
}

function Welcome({ name, age = 30, isStudent }) {
  return (
    <>
      <h1>
        Hello, {name}! Your age is, {age}, <br />
        {isStudent ? "You are a student" : "You are not a student"}
      </h1>
    </>
  );
}
