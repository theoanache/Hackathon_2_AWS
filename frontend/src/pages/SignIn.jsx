import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Background from "../components/Background";
import "./SignIn.css";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    mobile: "",
    firm: "",
    country: "",
    street: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  useEffect(() => {
    if (
      formData.passwordConfirm &&
      formData.password !== formData.passwordConfirm
    ) {
      setError("Les mots de passes que vous avez saisis ne correspondent pas.");
    } else {
      setError("");
    }
  }, [formData]);
  const handleSubmit = (event) => {
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    if (error === "") {
      axios
        .post(
          `${apiUrl}user/createprofile`,
          {
            email: formData.email,
            firstname: formData.firstname,
            lastname: formData.lastname,
            mobile: formData.mobile,
            firm: formData.firm,
            country: formData.country,
            street: formData.street,
            password: formData.password,
            role_id: 1,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 201) {
            navigate("/login");
          }
        })
        .catch((err) => setError(err));
    }

    event.preventDefault();
  };
  return (
    <div className="signIn_global">
      <Background />
      <div className="section_title">
        <h1 className="signIn_title">Sign in </h1>
      </div>
      <div className="signIn_form">
        <form onSubmit={handleSubmit}>
          <div className="signIn_rubrique">
            <label className="signIn_email_label" htmlFor="Email">
              Adresse email:
              <input
                className="signIn_email_input"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="signIn_rubrique">
            <label className="signIn_firstname_label" htmlFor="firstname">
              Firstname:
              <input
                className="signIn_firstname_input"
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="signIn_rubrique">
            <label className="signIn_lastname_label" htmlFor="lastname">
              Lastname:
              <input
                className="signIn_lastname_input"
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="signIn_rubrique">
            <label className="signIn_mobile_label" htmlFor="mobile">
              Mobile:
              <input
                className="signIn_mobile_input"
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="signIn_rubrique">
            <label className="signIn_firm_label" htmlFor="firm">
              Firm:
              <input
                className="signIn_firm_input"
                type="text"
                id="firm"
                name="firm"
                value={formData.firm}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="signIn_rubrique">
            <label className="signIn_country_label" htmlFor="country">
              Country:
              <input
                className="signIn_country_input"
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="signIn_rubrique">
            <label className="signIn_street_label" htmlFor="street">
              Street:
              <input
                className="signIn_street_input"
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="signIn_rubrique">
            <label
              className="signIn_driving_licence_label"
              htmlFor="driving_licence"
            >
              Driving Licence:
              <input
                className="signIn_driving_licence_input"
                type="file"
                id="driving_licence"
                name="driving_licence"
                value={formData.driving_licence}
                onChange={handleChange}
              />
            </label>
          </div>
          <label className="signIn_password_label" htmlFor="password">
            Mot de passe:
            <div className="signIn_password_input_g">
              <input
                className="signIn_password_input"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="signIn_show_button"
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </button>
            </div>
          </label>
          <label className="signIn_password_label" htmlFor="password_confirm">
            Confirmez votre mot de passe:
            <div className="relative">
              <input
                className="signIn_password_input"
                type={showConfirmPassword ? "text" : "password"}
                id="password-confirm"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="signIn_show_button"
              >
                {showConfirmPassword ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </button>
            </div>
          </label>
          <p className="wrong_password">{error}</p>
          <input
            className="signIn_button"
            type="submit"
            value="Créer votre compte"
          />
        </form>
        <p className="signIn_login">
          Vous avez déjà un compte ?{" "}
          <span className="link-animation">
            <Link to="/login" className="signIn_login_link">
              S’identifier
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
