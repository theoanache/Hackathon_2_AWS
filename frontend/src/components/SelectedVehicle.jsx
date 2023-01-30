import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAllVehicles } from "../utils/getAllVehicles";
import VehicleCard from "./VehicleCard";
import "./SelectedVehicle.css";

function SelectedVehicle({ selectedVehicle }) {
  const [allVehicles, setAllVehicles] = useState([]);

  const getVehicles = async () => {
    setAllVehicles(await getAllVehicles());
  };

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <div className="selected_vehicle_card">
      <h1> Here is my vehicle</h1>
      {allVehicles
        .filter((vehicle) => vehicle.model === selectedVehicle)
        .map((info) => (
          <div key={info.id}>
            <VehicleCard info={info} />
          </div>
        ))}
    </div>
  );
}

SelectedVehicle.propTypes = {
  selectedVehicle: PropTypes.func.isRequired,
};

export default SelectedVehicle;
