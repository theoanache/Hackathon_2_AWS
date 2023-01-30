import { React, useEffect, useState } from "react";
import { getAllVehicles } from "../utils/getAllVehicles";
import DisplayVehicle from "../components/DisplayVehicle";
import SelectedVehicle from "../components/SelectedVehicle";
import BG from "../assets/images/background3.jpg";
import "./BookingPage.css";

function BookingPage() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState("YZ-ORIGIN6");

  const getVehicles = async () => {
    setVehicles(await getAllVehicles());
  };

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <div className="body_booking_page">
      <div className="all_vehicles_list">
        {vehicles.map((vehicle) => (
          <DisplayVehicle
            key={vehicle.id}
            vehicle={vehicle}
            selectedVehicle={selectedVehicle}
            setSelectedVehicle={setSelectedVehicle}
          />
        ))}
      </div>
      <div className="one_vehicle_selected">
        <SelectedVehicle selectedVehicle={selectedVehicle} />
      </div>
      <div className="bg_booking_page">
        <img src={BG} alt="bg" />
      </div>
    </div>
  );
}

export default BookingPage;
