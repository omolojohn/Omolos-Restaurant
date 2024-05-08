import React, { useState } from 'react';

function Order() {
  const [orderVisible, setOrderVisible] = useState(false);

  const toggleOrder = () => {
    setOrderVisible(!orderVisible);
  };

  return (
    <div>
      <ul className="contact">
        <h2>Contact</h2>
        <li>Email: therestaurant@hotmail.com</li>
        <li>Phone: +254715689085</li>
        <li>Web: www.therestaurant.co.ke</li>
      </ul>
      <div>
        <ul onClick={toggleOrder}><button>Order</button></ul>
        {orderVisible && (
          <form>
            <label>Name:</label>
            <input type="text" />
            <label>Email:</label>
            <input type="email" />
            <label>Phone:</label>
            <input type="tel" />
            <button type="submit">Place Order</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Order;
