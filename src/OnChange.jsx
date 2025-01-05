import React, { useState } from "react";

const OnChange = () => {
  const [name, setName] = useState("Kehulum");
  const [quantity, setQuantity] = useState(0);
  const [payment, setPayment] = useState("Visa");
  const [shipping, setShipping] = useState("Delivery");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <div>
      {/* <p>Name: {name} </p> */}
      {/* <input type="text" value={name} onChange={handleNameChange} /> */}
      <p>Quantity: {quantity} </p>
      <input type="number" value={quantity} onChange={handleQuantityChange} />

      <select name="" id="" onChange={handlePaymentChange}>
        <option value="Visa">Visa</option>
        <option value="Telebirr">Telebirr</option>
        <option value="Master Card<">Master Card</option>
        <option value="Express">Express</option>
      </select>

      <p>Payment Method: {payment} </p>

      <label htmlFor="">
        <input
          type="radio"
          name="shipping"
          value="Pick Up"
          onChange={handleShippingChange}
        />
        Pick Up
      </label>

      <br />

      <label htmlFor="">
        <input
          type="radio"
          name="shipping"
          value="Delivery"
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping} </p>
    </div>
  );
};

export default OnChange;
