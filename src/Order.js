import React, { useState, useEffect } from 'react';

function Order() {
  const [orderVisible, setOrderVisible] = useState(false);
  const [orders, setOrders] = useState([]);

  const toggleOrder = () => {
    setOrderVisible(!orderVisible);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:3001/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObject),
      });

      if (response.ok) {
        console.log('Order placed successfully');
        event.target.reset();
        setOrderVisible(false);
      } else {
        console.error('Failed to place order');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:3001/menu');
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      } else {
        console.error('Failed to fetch orders');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <ul onClick={toggleOrder}><button>Order</button></ul>
      {orderVisible && (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Address:</label>
          <input type="address" name="address" required />
          <label>Phone:</label>
          <input type="tel" name="phone" required />
          <label>Food Item:</label>
          <input type="text" name="foodItem" required />
          <label>Quantity:</label>
          <input type="number" name="quantity" required />
          <label>Special Instructions:</label>
          <textarea name="instructions"></textarea>
          <button type="submit">Place Order</button>
        </form>
      )}
      <div>
    
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              Name: {order.name}, Address: {order.address}, Phone: {order.phone}, Food Item: {order.foodItem}, Quantity: {order.quantity}, Instructions: {order.instructions}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Order;