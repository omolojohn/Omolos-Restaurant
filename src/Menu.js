import React, { useState, useEffect } from 'react';

function Menu({ onSelect }) {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/menu')
            .then(response => response.json())
            .then(data => setDishes(data))
            .catch(error => console.error('Error fetching dishes:', error));
    }, []);

    const handleSelectItem = (item) => {
        onSelect(item);
    };

    return (
        <div className='menu'>
            <h1>Our Menu</h1>
            <div>
                {dishes.map(dish => (
                    <div key={dish.id} onClick={() => handleSelectItem(dish)}>
                         <img src={dish.image_url} alt={dish.name} />
                        <h2>{dish.name}</h2>
                        <p>{dish.description}</p>
                        <p>{dish.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;