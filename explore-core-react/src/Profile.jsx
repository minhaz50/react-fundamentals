import React from "react";

export default function Profils() {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: "Minhaz",
          imageId: "Yefowu2",
        }}
      />

      <Avatar
        size={80}
        person={{
          name: "Jhon",
          imageId: "Pkdwt1",
        }}
      />

      <Avatar
        size={50}
        person={{
          name: "Israt",
          imageId: "Nkl2io9",
        }}
      />
    </div>
  );
}

function Avatar({ person, size }) {
  const imageUrl = "https://react.dev/images/docs/scientists/MK3eW3Am.jpg";
  return <img src={imageUrl} alt={person.name} width={size} height={size} />;
}
