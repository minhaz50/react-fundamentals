import React from "react";

function Item({ name, isPacked }) {
  // method 1
  // return <li>{isPacked ? <del>{name + "✅"} </del> : name + "❌"}</li>;
  
  // method 2
  // return (
  //   <li>
  //     {name} {isPacked && "✅"}
  //   </li>
  // );

  // method 3
  let itemContent = name;
  if (isPacked) {
    itemContent = <del> {name + "✅"}</del>;
  }
  return <li>{itemContent}</li>;
}

export default function Packed() {
  return (
    <section>
      <h2>Sally Ride's Packing lists </h2>
      <ul>
        <Item isPacked={true} name="Spice suit" />

        <Item isPacked={true} name="Helmet with golden leaf" />

        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
