// SortDropdown.jsx

import { useState } from "react";
import "./SortDropdown.css";

const SortDropdown = () => {
  const [selected, setSelected] = useState("Best");
  const [open, setOpen] = useState(false);

  const options = [
    "Best",
    "Cheapest",
    "Fastest",
    "Earliest Departure",
    "Latest Departure",
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="sort-container">
      <span className="sort-label">Sort by:</span>

      <div
        className="dropdown"
        onClick={() => setOpen(!open)}
      >
        <div className="dropdown-selected">
          {selected}

          <span
            className={`arrow ${open ? "rotate" : ""}`}
          >
            ▼
          </span>
        </div>

        {open && (
          <div className="dropdown-menu">
            {options.map((option) => (
              <div
                key={option}
                className={`dropdown-item ${
                  selected === option
                    ? "active-item"
                    : ""
                }`}
                onClick={() =>
                  handleSelect(option)
                }
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortDropdown;