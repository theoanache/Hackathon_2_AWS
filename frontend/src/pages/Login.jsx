import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { authContext } from "../context/AuthContext";
import "./Login.css";
import BG from "../assets/images/background-bleufix.png";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login, auth } = useContext(authContext);

  useEffect(() => {
    if (auth.data) {
      navigate("/");
    }
  }, []);
  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = (event) => {
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    axios
      .post(
        `${apiUrl}user/login`,
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          // eslint-disable-next-line no-undef
          login(res.data);
        }
      })
      .catch((err) => setError(err.response));
    event.preventDefault();
  };

  return (
    <div className="loginPage">
      <div className="loginTitleSection">
        <h1 className="loginTitle">Login</h1>
      </div>
      <div className="loginForm">
        <form onSubmit={handleSubmit}>
          <label className="loginFormLabel" htmlFor="Email">
            Email
            <input
              className="loginFormInput"
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            &nbsp;
          </label>
          <label className="loginFormLabel" htmlFor="password">
            Password
            <div className="relative">
              <input
                className="loginFormInput"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            &nbsp;
          </label>
          <p className="block text-rose-600/75 text-sm italic">{error}</p>
          <input
            className="loginButtonIdentification"
            type="submit"
            value="Sign In"
          />
        </form>
        <p className="loginNoAccountText">
          Don't have an account ?{" "}
          <span className="loginNoAccountTextLink">
            <Link to="/signup">Sign Up</Link>
          </span>
        </p>
      </div>
      <div className="loginBG">
        <img src={BG} alt="bg" />
      </div>
    </div>
  );
}

export default Login;
