import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import mustang from "../assets/mustang.gif";
import BG from "../assets/images/background-bleu.jpg";

function Home() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [pickUpCity, setPickUpCity] = useState();
  const [cityList, setCityList] = useState([]);

  const getStartDate = (e) => {
    setStartDate({
      [e.target.name]: e.target.value,
    });
  };

  const getEndDate = (e) => {
    setEndDate({
      [e.target.name]: e.target.value,
    });
  };

  const getPickUpCity = (e) => {
    setPickUpCity(e.target.value);
  };

  console.warn(startDate);
  console.warn(endDate);
  console.warn(pickUpCity);

  const getAllCities = () => {
    axios
      .get("http://localhost:5000/api/city")
      .then((response) => setCityList(response.data));
  };

  useEffect(() => {
    getAllCities();
  }, []);

  return (
    <div className="main_section">
      <div className="bloc_text">
        <h1 className="main_title">Ride Now</h1>
        <h2 className="second_main_title">Fatboy Slim is fucking in heaven</h2>
      </div>
      <div className="select_section">
        <div className="label_and_select">
          <label htmlFor="select_city">Pick up</label>
          <select
            className="select"
            name="city"
            id="city-select"
            onChange={getPickUpCity}
          >
            <option valeur="">---</option>
            {cityList.map((city) => (
              <option value={city.id}>{city.name}</option>
            ))}
          </select>
        </div>
        <div className="input_from">
          <label htmlFor="from">From</label>
          <input
            className="input"
            type="date"
            name="from"
            onChange={getStartDate}
          />
        </div>
        <div className="input_to">
          <label htmlFor="to">To</label>
          <input
            className="input"
            type="date"
            name="to"
            onChange={getEndDate}
          />
        </div>
        <button className="button" type="button">
          Search
        </button>
      </div>
      <div className="mustang_container">
        <img className="vehicule" src={mustang} alt="mustang" />
      </div>
      <div className="BG_container">
        <img src={BG} alt="bg" />
      </div>
    </div>
  );
}

export default Home;
