import React, { useState, useEffect } from "react";

function Order() {
  const [orderVisible, setOrderVisible] = useState(false);
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionText, setSuggestionText] = useState("");

  const toggleOrder = () => {
    setOrderVisible(!orderVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedSuggestions = [...suggestions, suggestionText];
    setSuggestions(updatedSuggestions);
    localStorage.setItem("suggestions", JSON.stringify(updatedSuggestions));

    setSuggestionText("");
  };

  const handleSuggestionChange = (event) => {
    setSuggestionText(event.target.value);
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch("https://restaurant-server-2rkf.onrender.com/orders");
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      } else {
        console.error("Failed to fetch orders");
      }
    } catch (error) {
      console.error("Error occurred while fetching orders:", error);
    }
  };

  const fetchMenu = async () => {
    try {
      const response = await fetch("https://restaurant-server-2rkf.onrender.com/menu");
      if (response.ok) {
        const data = await response.json();
        setMenu(data.menu);
      } else {
        console.error("Failed to fetch menu");
      }
    } catch (error) {
      console.error("Error occurred while fetching menu:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchMenu();
    const storedSuggestions = localStorage.getItem("suggestions");
    if (storedSuggestions) {
      setSuggestions(JSON.parse(storedSuggestions));
    }
  }, []);

  return (
    <div className="order">
      <ul>
        <li onClick={toggleOrder}>
          <button>Order</button>
        </li>
      </ul>
      {orderVisible && (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Address:</label>
          <input type="text" name="address" required />
          <label>Phone:</label>
          <input type="tel" name="phone" required />
          <label>Food Item:</label>
          <select name="foodItem" required>
            {menu.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <label>Quantity:</label>
          <input type="number" name="quantity" required />
          <label>Special Instructions:</label>
          <textarea name="instructions"></textarea>
          <button type="submit">Place Order</button>
        </form>
      )}
      <div>
        <h2>Placed Orders</h2>
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              Name: {order.name}, Address: {order.address}, Phone: {order.phone}
              , Food Item: {order.foodItem}, Quantity: {order.quantity},
              Instructions: {order.instructions}, Status: {order.status}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Have a Suggestion?</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={suggestionText}
            onChange={handleSuggestionChange}
            placeholder="Enter your suggestion..."
            required
          ></textarea>
          <button type="submit">Submit Suggestion</button>
        </form>
      </div>
      <div>
        <h2>Customer Suggestions</h2>
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Order;
