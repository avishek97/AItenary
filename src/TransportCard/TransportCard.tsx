import "./TransportCard.css";

const TransportCard = ({
  logo,
  provider,
  departureTime,
  departurePlace,
  arrivalTime,
  arrivalPlace,
  duration,
  stops,
  price,
  buttonText = "Select",
}) => {
  return (
    <div className="result-row">
      {/* Provider */}
      <div className="provider-section">
        <img
          src={logo}
          alt={provider}
          className="provider-logo"
        />

        <div>
          <h3>{provider}</h3>
        </div>
      </div>

      {/* Departure */}
      <div className="time-section">
        <h2>{departureTime}</h2>
        <h4>{departurePlace}</h4>
      </div>

      {/* Journey */}
      <div className="journey-section">
        <p>{duration}</p>

        <div className="line-wrapper">
          <div className="line"></div>
          <div className="plane-dot"></div>
        </div>

        <span>{stops} Stops</span>
      </div>

      {/* Arrival */}
      <div className="time-section">
        <h2>{arrivalTime}</h2>
        <h4>{arrivalPlace}</h4>
      </div>

      {/* Price */}
      <div className="price-section">
        <h2>₹{price}</h2>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default TransportCard;