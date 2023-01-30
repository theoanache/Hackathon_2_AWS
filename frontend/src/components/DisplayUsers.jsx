import React from "react";
import PropTypes from "prop-types";
import "./DisplayUsers.css";
import Avatar from "../assets/avatar_user.png";

function DisplayUsers({ user }) {
  return (
    <div>
      <div className="UserCard">
        <img className="ImgAvatar" src={Avatar} alt="trottinette" />
        <div className="CardTextBooked">
          <h5 className="userName">
            {" "}
            {user.firstname}
            {user.lastname}
          </h5>
          <h5 className="userMail">b_breuvage@mail.fr {user.email}</h5>
          <h5 className="userMail">06 23 44 33 76 {user.mobile}</h5>
        </div>
        <button className="buttonXUser" type="button">
          X
        </button>
      </div>
    </div>
  );
}

DisplayUsers.propTypes = {
  user: PropTypes.func.isRequired,
};

export default DisplayUsers;
