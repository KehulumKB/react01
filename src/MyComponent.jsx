import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(20);
  const [isEmployed, setEmployed] = useState(false);

  const changeName = () => {
    setName("Kehulum");
  };

  const changeAge = () => {
    setAge(age + 1);
  };

  const changeEmployed = () => {
    setEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Increment: {isEmployed ? "Yes" : "No"} </p>
      <button onClick={changeEmployed}>?</button>
    </div>
  );
};

export default MyComponent;
