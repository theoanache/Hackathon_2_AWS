import React from "react";
import PropTypes from "prop-types";

function VehicleCard({ info }) {
  return (
    <div
      style={{
        backgroundColor: `${info.color}`,
        border: `4px solid ${info.color}`,
      }}
    >
      <img src={info.photo} alt={info.type} />
      <h1>{info.type}</h1>
      <h2>{info.model}</h2>

      <p>{info.description}</p>
      <div>
        <div>
          <h3>Capacity</h3>
          <h3>{info.capacity}</h3>
        </div>
        <div>
          <h3>Max speed</h3>
          <h3>{info.maxspeed}</h3>
        </div>
        <div>
          <h3>Wheels</h3>
          <h3>{info.wheel}</h3>
        </div>
        <div>
          <h3>Fuel</h3>
          <h3>{info.fuel}</h3>
        </div>
        <div>
          <h3>Gearbox</h3>
          <h3>{info.gearbox}</h3>
        </div>
      </div>
      <div>
        <h1>{info.price} per day</h1>
        <button type="button"> Book now</button>
      </div>
    </div>
  );
}

VehicleCard.propTypes = {
  info: PropTypes.func.isRequired,
};

export default VehicleCard;
