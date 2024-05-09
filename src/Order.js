import React, { useState } from 'react';

function Order() {
  const [orderVisible, setOrderVisible] = useState(false);

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
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log('Form data:', formDataObject);
    
   event.target.reset();
    setOrderVisible(false);
  

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