import React, { useEffect, useState } from "react";
import { getAllUsers } from "../utils/getAllUsers";
import "./AdminPage.css";
import BG from "../assets/images/background-bleufix.png";
import Batmobile from "../assets/images/batmobile.png";
import Bike from "../assets/images/bike.png";
// import Blackpearl from "../assets/images/blackpearl.png";
// import JetSki from "../assets/images/jetski.png";
import trotinette from "../assets/images/trottinette.png";
import tank from "../assets/images/tank.png";
import monocycle from "../assets/images/monocycle.png";
import luge from "../assets/images/luge.png";
// import Avatar from "../assets/avatar_user.png";
import DisplayUsers from "../components/DisplayUsers";

function Admin() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setUsers(await getAllUsers());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="Entete">
      <div className="Text">
        <h1>Admin Page</h1>
      </div>
      <div className="titre_admin">
        <h4 className="vehiculeDispo">Available vehicles</h4>
        <h4 className="vehiculeDispo">Booked Vehicles</h4>
        <h4 className="vehiculeDispo">Users</h4>
      </div>
      <div className="troiscards">
        <div className="EnsembleCardsDisponible">
          <div className="Card">
            <h4>Batmobile</h4>
            <h6>1999</h6>
            <img className="CardImg" src={Batmobile} alt="batmobile" />
            <button className="ButtonCardAdmin" type="button">
              {" "}
              DELETE{" "}
            </button>
          </div>
          <div className="Card">
            <h4>Bike</h4>
            <h6>2005</h6>
            <img className="CardImg" src={Bike} alt="bike" />
            <button className="ButtonCardAdmin" type="button">
              {" "}
              DELETE{" "}
            </button>
            <div className="Card">
              <h4>Batmobile</h4>
              <h6>1999</h6>
              <img className="CardImg" src={Batmobile} alt="batmobile" />
              <button className="ButtonCardAdmin" type="button">
                {" "}
                DELETE{" "}
              </button>
            </div>
            <div className="Card">
              <h4>Batmobile</h4>
              <h6>1999</h6>
              <img className="CardImg" src={Batmobile} alt="batmobile" />
              <button className="ButtonCardAdmin" type="button">
                {" "}
                DELETE{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="Booked">
          <div className="BookedCard">
            <img className="jetImg" src={trotinette} alt="trottinette" />
            <div className="CardTextBooked">
              <h5>Trotinette </h5>
              <h6>Reservé par : Gang des 7</h6>
              <h6>date du 13/01/2023 au 15/01/2023</h6>
            </div>
            <button className="buttonX" type="button">
              X
            </button>
          </div>
          <div className="BookedCard">
            <img className="jetImg" src={tank} alt="tank" />
            <div className="CardTextBooked">
              <h5>Tank </h5>
              <h6>Reservé par : Mr Poutine</h6>
              <h6>date du 24/12/2022 au 12/02/2023</h6>
            </div>
            <button className="buttonX" type="button">
              X
            </button>
          </div>
          <div className="BookedCard">
            <img className="jetImg" src={monocycle} alt="monocycle" />
            <div className="CardTextBooked">
              <h5>Monocycle </h5>
              <h6>Reservé par : Mr clown</h6>
              <h6>date du 09/01/2023 au 24/01/2023</h6>
            </div>
            <button className="buttonX" type="button">
              X
            </button>
          </div>
          <div className="BookedCard">
            <img className="jetImg" src={luge} alt="luge" />
            <div className="CardTextBooked">
              <h5>luge </h5>
              <h6>Reservé par : David Faure</h6>
              <h6>date du 14/07/2023 au 15/07/2023</h6>
            </div>
            <button className="buttonX" type="button">
              X
            </button>
          </div>
        </div>
        <div className="user">
          {users.map((user) => (
            <DisplayUsers key={user.id} user={user} />
          ))}
        </div>
        <div className="AdminBG">
          <img src={BG} alt="bg" />
        </div>
      </div>
    </div>
  );
}

export default Admin;
