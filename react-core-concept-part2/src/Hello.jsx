import React from "react";

export default function Hello() {
  function Button() {
    function handleClick() {
      alert("button clicked");
    }
    return <button onClick={handleClick}>Click me</button>;
  }
  return <div>{Button}</div>;
}
