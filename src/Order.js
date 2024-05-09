import React, { useState, useEffect } from 'react';

function Order() {
  const [orderVisible, setOrderVisible] = useState(false);
  const [orders, setOrders] = useState([]);

  const toggleOrder = () => {
    setOrderVisible(!orderVisible);
  };

  return (

    
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
      
  );
}

export default Order;
