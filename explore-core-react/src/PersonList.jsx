export default function PersonList() {
  const person = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];

  const listItems = person.map((p) => <li>{p}</li>);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ textAlign: "center" }}>Method 1</h2>
      {person.map((p) => (
        <li key={p}>{p}</li>
      ))}
      <hr />
      <h2>Method 2</h2>
      <ul>{listItems}</ul>
    </div>
  );
}
