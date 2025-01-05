import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const decreement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter App </h1>
      <p>Count: {count} </p>
      <button onClick={increment}>+ </button> &nbsp;
      <button onClick={decreement}>- </button> &nbsp;
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UseState;
