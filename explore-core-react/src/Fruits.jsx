// export default function Furits({ fruit }) {
//   return <h3>The fruit name is: {fruit}</h3>;
// }

export default function Singer({ singer }) {
  const { id, name, age } = singer;
  return (
    <div>
      <h2>Id:{id}</h2>
      <h2>Name:{name}</h2>
      <h2>Age:{age}</h2>
    </div>
  );
}
