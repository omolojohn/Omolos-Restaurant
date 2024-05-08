import React, { useState }from "react";
import "./App.css";

function Home() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [orderVisible, setOrderVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    if (orderVisible) {
      setOrderVisible(false);
    }
  };

  const toggleOrder = () => {
    setOrderVisible(!orderVisible);
    if (menuVisible) {
      setMenuVisible(false);
    }
  };

  return (
    <div className="home">
        <div>
            <ul className="contact">
                <h2>Contact</h2>
                <li>Email: therestaurant@hotmail.com</li>
                <li>Phone: +254715689085</li>
                <li>Web: www.therestaurant.co.ke</li>
            </ul>
        </div>
         <h1>Welcome to Our Restaurant</h1>
      <p>Here you can find delicious dishes to satisfy your appetite.</p>
      <img
        src="https://images.pexels.com/photos/4473491/pexels-photo-4473491.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Restaurant"
      />
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

export default Home;
