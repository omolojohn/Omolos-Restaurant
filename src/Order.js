import React, { useState } from 'react';

function Order () {
  const [orderVisible, setOrderVisible] = useState(false);
  const[orderSubmitted, setOrderSubmitted] = useState(false);

  const toggleOrder = () => {
    setOrderVisible(!orderVisible)

    setOrderSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setOrderSubmitted(true);
  };

  return (
    <div>
      {!orderSubmitted ? (
        <div>
          <button onClick={toggleOrder}>Order</button>
          {orderVisible && (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input id="name" type="text" required />
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" required />
              <label htmlFor="phone">Phone:</label>
              <input id="phone" type="tel" required />
              <button type="submit">Place Order</button>
            </form>
          )}
        </div>
      ) : (
        <div>
          <p>Thank you for your order! We'll contact you shortly.</p>
          <button onClick={toggleOrder}>Place Another Order</button>
        </div>
      )}
    </div>
  );
}

export default Order;