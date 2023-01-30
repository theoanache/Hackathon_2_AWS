import React from "react";
import PropTypes from "prop-types";
import "./DisplayVehicle.css";

function DisplayVehicle({ vehicle, setSelectedVehicle }) {
  const handleClick = (el) => {
    setSelectedVehicle(el.target.innerText);
  };

  return (
    <div
      className="vehicle_card"
      style={{
        backgroundColor: `${vehicle.color}`,
        border: `4px solid ${vehicle.color}`,
      }}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="first_block_dv">
        <div className="title_block_dv">
          <h2 className="title_block_element"> {vehicle.type} </h2>
          <h2 className="title_block_element">{vehicle.model}</h2>
          <h3 className="title_block_element"> Year : {vehicle.year} </h3>
          <button type="button" className="button_dv title_block_element">
            {" "}
            Let's gooo{" "}
          </button>
        </div>
        <img src={vehicle.photo} alt={vehicle.type} className="vehicle_image" />
      </div>
    </div>
  );
}

DisplayVehicle.propTypes = {
  vehicle: PropTypes.func.isRequired,
  setSelectedVehicle: PropTypes.func.isRequired,
};

export default DisplayVehicle;
