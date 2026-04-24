import React, { useState } from "react";

export default function Input() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}
