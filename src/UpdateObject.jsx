import React, { useState } from "react";

const UpdateObject = () => {
  const [car, setCar] = useState({
    make: "Ford",
    model: "Mustang",
    year: 2025,
  });

  const handleYearCahnge = (e) => {
    setCar((c) => ({ ...car, year: e.target.value }));
  };

  const handleMakeCahnge = (e) => {
    setCar((c) => ({ ...car, make: e.target.value }));
  };

  const handleModelCahnge = (e) => {
    setCar((c) => ({ ...car, model: e.target.value }));
  };

  return (
    <div>
      <p>
        My Fav Car: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearCahnge} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeCahnge} /> <br />
      <input type="text" value={car.model} onChange={handleModelCahnge} />
      <br />
    </div>
  );
};

export default UpdateObject;
