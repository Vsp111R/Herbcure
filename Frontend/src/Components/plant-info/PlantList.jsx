import React from 'react';
import { Link } from 'react-router-dom';
import './plant-info.css';

const plantData = {
  aloeVera: {
    name: "Aloe Vera",
    image: "/images/aloe-vera.jpeg",
  },
  tulsi: {
    name: "Tulsi (Holy Basil)",
    image: "/images/tulsi.jpeg",
  },
  neem: {
    name: "Neem",
    image: "/images/neem.jpeg",
  },
  mint: {
    name: "Mint",
    image: "/images/mint.jpeg",
  },
  lavender: {
    name: "Lavender",
    image: "/images/lavender.jpeg",
  },
};

const PlantList = () => {
  return (
    <div className="plant-list-container">
      <h1 className="plant-list-title">Plant Information</h1>
      <ul className="plant-list">
        {Object.keys(plantData).map((id) => (
          <li key={id} className="plant-item">
            <Link to={`/herbcure/plant-info/${id}`} className="plant-link">
              <img src={plantData[id].image} alt={plantData[id].name} className="plant-image" />
              <h3>{plantData[id].name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantList;
