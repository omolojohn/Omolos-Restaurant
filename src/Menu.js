import React, { useState, useEffect } from 'react';
import './App.css'

function Menu() {
    const [dishes, setDishes] = useState([]);
    const [ selectedDish, setSelectedDish] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/menu')
            .then(response => response.json())
            .then(data => setDishes(data))
            .catch(error => console.error('Error fetching dishes:', error));
    }, []);

    const handleDishClick = (dish) => {
        setSelectedDish(dish);

        console.log("Selected dish:", dish);
    };

    return (
        <div>
            <h1>Our Menu</h1>
            <div>
                {dishes.map(dish => (
                 <div key={dish.id} onClick={() => handleDishClick(dish)}>   
                        <img src={dish.image} alt={dish.name} />
                        <h2>{dish.name}</h2>
                        <p>{dish.description}</p>
        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;