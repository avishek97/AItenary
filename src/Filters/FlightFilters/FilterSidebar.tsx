// FilterSidebar.jsx

import React, { useState } from "react";
import "./FilterSidebar.css";

const FilterSidebar = () => {
  const [price, setPrice] = useState<number>(30000);
  const [departure, setDeparture] = useState<number>(18);

  return (
    <div className="filter-sidebar">
      {/* Header */}
      <div className="filter-header">
        <h3>Filters</h3>
        <button>Clear all</button>
      </div>

      {/* Stops */}
      <div className="filter-section">
        <h4>Stops</h4>

        <label className="checkbox-item">
          <input type="checkbox" />
          Non-stop
          <span>₹45,120</span>
        </label>

        <label className="checkbox-item">
          <input type="checkbox" defaultChecked />
          1 Stop
          <span>₹28,430</span>
        </label>

        <label className="checkbox-item">
          <input type="checkbox" />
          2+ Stops
          <span>₹21,780</span>
        </label>
      </div>

      {/* Price Range */}
      <div className="filter-section">
        <h4>Price Range</h4>

        <input
          type="range"
          min="5000"
          max="60000"
          value={price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
          className="range-slider"
        />

        <div className="range-values">
          <span>₹5,000</span>
          <span>₹{price}</span>
        </div>
      </div>

      {/* Departure */}
      <div className="filter-section">
        <h4>Departure</h4>

        <input
          type="range"
          min="0"
          max="24"
          value={departure}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeparture(Number(e.target.value))}
          className="range-slider"
        />

        <div className="range-values">
          <span>00:00</span>
          <span>{departure}:00</span>
        </div>
      </div>

      {/* Airlines */}
      <div className="filter-section">
        <div className="airline-header">
          <h4>Airlines</h4>
          <button>Select all</button>
        </div>

        <label className="checkbox-item">
          <input type="checkbox" defaultChecked />
          Air India
          <span>₹45,120</span>
        </label>

        <label className="checkbox-item">
          <input type="checkbox" defaultChecked />
          IndiGo
          <span>₹38,450</span>
        </label>

        <label className="checkbox-item">
          <input type="checkbox" />
          Lufthansa
          <span>₹42,300</span>
        </label>

        <label className="checkbox-item">
          <input type="checkbox" />
          Emirates
          <span>₹54,120</span>
        </label>

        <label className="checkbox-item">
          <input type="checkbox" />
          Qatar Airways
          <span>₹48,560</span>
        </label>
      </div>
    </div>
  );
};

export default FilterSidebar;