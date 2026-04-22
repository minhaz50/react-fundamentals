import Singer from "./Fruits";
import Furits from "./Fruits";
import Gallery, { Profile } from "./Gallary";
import Packed from "./Packed";
import PeopleList from "./PeopleList";
import PersonList from "./PersonList";
import Profils from "./Profile";
import PropsPractice from "./PropsPractice";

export default function App() {
  // const fruits = ["Mango", "Banana", "Apple", "Guava", "Grape"];

  const singers = [
    {
      id: 1,
      name: "Putin",
      age: 85,
    },
    {
      id: 2,
      name: "Trump",
      age: 53,
    },
    {
      id: 3,
      name: "Balam",
      age: 83,
    },
  ];
  return (
    <>
      <Gallery />
      <Profile />
      <Profils />
      {/* <PropsPractice /> */}
      <Packed />
      {/* {fruits.map((fruit) => (
        <Furits fruit={fruit} />
      ))} */}

      {singers.map((singer) => (
        <Singer singer={singer} key={singer.id}></Singer>
      ))}
      <PersonList />
      <br />
      <br />
      <br />
      <hr />
      <PeopleList />
    </>
  );
}
