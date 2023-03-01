import React, { useState } from "react";

function PlantCard({plant}) {
const [inStock, setInStock] = useState(true)

const handleInStock = () => {
  setInStock(inStock => !inStock)
}

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button onClick={handleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
      
    </li>
  );
}

export default PlantCard;
