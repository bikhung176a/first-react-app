import React from "react";

function Car(props) {
  return <li> I am a {props.brand}</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: "Audi" },
    { id: 2, brand: "BWM" },
    { id: 3, brand: "Subaru" },
  ];

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

export default Garage;
