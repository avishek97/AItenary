// TrainFilterSidebar.jsx

import React, { useState } from "react";
import "./TrainFilterSidebar.css";
import { trainClasses } from "../../../Helpers/constants";

const TrainFilterSidebar = () => {
  const [price, setPrice] = useState(2500);

  

  return (
    <div className="train-filter-sidebar">
      {/* Header */}
      <div className="filter-header">
        <h3>Filters</h3>
        <button>Clear all</button>
      </div>

      {/* Train Class */}
      <div className="filter-section">
        <h4>Train Class</h4>

        {trainClasses.map((item) => (
          <label key={item} className="checkbox-item">
            <input type="checkbox" />
            {item}
          </label>
        ))}
      </div>

      {/* Boarding Station */}

      {/* Dropping Station */}
      {/* Departure Time */}
      <div className="filter-section">
        <h4>Departure Time</h4>

        <div className="time-grid">
          <button>Morning</button>
          <button>Afternoon</button>
          <button>Evening</button>
          <button>Night</button>
        </div>
      </div>

      {/* Availability */}
      <div className="filter-section">
        <h4>Availability</h4>

        <label className="checkbox-item">
          <input type="checkbox" />
          Available Only
        </label>

        <label className="checkbox-item">
          <input type="checkbox" />
          RAC
        </label>

        <label className="checkbox-item">
          <input type="checkbox" />
          Waiting List
        </label>
      </div>

      {/* Price Range */}
      <div className="filter-section">
        <h4>Price Range</h4>

        <input
          type="range"
          min="100"
          max="6000"
          value={price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
          className="range-slider"
        />

        <div className="range-values">
          <span>₹100</span>
          <span>₹{price}</span>
        </div>
      </div>
    </div>
  );
};

export default TrainFilterSidebar;  