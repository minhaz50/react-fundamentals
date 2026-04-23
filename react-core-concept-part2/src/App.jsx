import Buttons from "./Buttons";
import Counter from "./Counter";
import Hello from "./Hello";

function App() {
  const handleClick = () => {
    alert("I am clicked.");
  };

  function handleClick2() {
    alert("I am clicked2");
  }

  return (
    <>
      <h1>Hellooo World</h1>
      <button onClick={handleClick}>Clicks</button>
      <button onClick={handleClick2}>Click2</button>
      <Buttons />
      <Hello />
      <br />
      <Counter />
    </>
  );
}

export default App;
