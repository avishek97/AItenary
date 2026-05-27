// BusFilterSidebar.jsx

import React, { useState } from "react";
import "./BusFilterSidebar.css";

const BusFilterSidebar = () => {
  const [price, setPrice] = useState(2500);

  const busTypes = [
    "Seater",
    "Sleeper",
    "AC",
    "Non-AC",
  ];

  const boardingPoints = [
    "Majestic",
    "Silk Board",
    "BTM Layout",
    "Marathahalli",
    "Electronic City",
  ];

  const droppingPoints = [
    "Howrah",
    "Esplanade",
    "Salt Lake",
    "Airport",
    "New Town",
  ];

  return (
    <div className="bus-filter-sidebar">
      {/* Header */}
      <div className="filter-header">
        <h3>Filters</h3>
        <button>Clear all</button>
      </div>

      {/* Bus Type */}
      <div className="filter-section">
        <h4>Bus Type</h4>

        {busTypes.map((type) => (
          <label key={type} className="checkbox-item">
            <input type="checkbox" />
            {type}
          </label>
        ))}
      </div>

      {/* Boarding Point */}
      <div className="filter-section">
        <h4>Boarding Point</h4>

        {boardingPoints.map((point) => (
          <label key={point} className="radio-item">
            <input
              type="radio"
              name="boarding"
            />
            {point}
          </label>
        ))}
      </div>

      {/* Dropping Point */}
      <div className="filter-section">
        <h4>Dropping Point</h4>

        {droppingPoints.map((point) => (
          <label key={point} className="radio-item">
            <input
              type="radio"
              name="dropping"
            />
            {point}
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="filter-section">
        <h4>Price Range</h4>

        <input
          type="range"
          min="200"
          max="5000"
          value={price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
          className="range-slider"
        />

        <div className="range-values">
          <span>₹200</span>
          <span>₹{price}</span>
        </div>
      </div>
    </div>
  );
};

export default BusFilterSidebar;