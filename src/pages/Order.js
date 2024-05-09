import React, { useState } from 'react';

function Order() {
  const [orderVisible, setOrderVisible] = useState(false);

  const toggleOrder = () => {
    setOrderVisible(!orderVisible);
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log('Form data:', formDataObject);
    
    event.target.reset();
    setOrderVisible(false);
  };

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
    </div>
  );
}

export default Order;
