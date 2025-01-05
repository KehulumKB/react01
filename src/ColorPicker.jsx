import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = React.useState("#ffffff");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color} </p>
        <label htmlFor="">Select a Color: </label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </div>
  );
};

export default ColorPicker;
