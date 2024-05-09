import React, { useState } from 'react';

function Order() {
  const [orderVisible, setOrderVisible] = useState(false);
<<<<<<< HEAD
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const items = [
    { id: "Nyama Choma", name: "Item 1", price: 10 },
    { id: "Milk Shake", name: "Item 2", price: 20 },
    { id: "Fish", name: "Item 3", price: 15 },
    { id: "Chicken", name: "Item 4", price: 30 },
    { id: "Ugali Sukuma Wiki", name: "Item 5", price: 40 },
    { id: "Mtura", name: "Item 6", price: 5 },
  ];

  const toggleOrder = () => {
    setOrderVisible(!orderVisible);
    setOrderSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setOrderSubmitted(true);
  };

  const handleItemChange = (itemId, quantity) => {
    const existingItemIndex = selectedItems.findIndex(item => item.id === itemId);
    if (existingItemIndex !== -1) {
      const updatedItems = [...selectedItems];
      updatedItems[existingItemIndex].quantity = quantity;
      setSelectedItems(updatedItems);
    } else {
      const selectedItem = items.find(item => item.id === itemId);
      setSelectedItems([...selectedItems, { ...selectedItem, quantity }]);
    }
  };

  
  useState(() => {
    const totalPrice = selectedItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalPrice(totalPrice);
  }, [selectedItems]);

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

              <p>Select Items:</p>
              <ul>
                {items.map(item => (
                  <li key={item.id}>
                    <label>
                      <input
                        type="number"
                        min="0"
                        value={selectedItems.find(selectedItem => selectedItem.id === item.id)?.quantity || 0}
                        onChange={(e) => handleItemChange(item.id, parseInt(e.target.value))}
                      />
                      {item.name} - ${item.price}
                    </label>
                  </li>
                ))}
              </ul>
              
              <p>Total Price: ${totalPrice}</p>

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
=======

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
>>>>>>> acf12b5 (changes)
  );
}

export default Order;