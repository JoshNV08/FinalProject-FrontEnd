import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Google, Facebook } from "react-bootstrap-icons";
import "../../Styles/Others/Login.css";
import "../../Styles/Buttons/ButtonYellow.css";
import NotAvailable from "../Others/NotAvailable";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setToken } from "../../redux/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  const loginNodeRef = useRef(null);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const getToken = async () => {
    try {
      const response = await axios.post("http://localhost:3000/tokens", {
        email,
        password,
      });
      dispatch(setToken(response.data.token));
      navigate("/profile");
    } catch (error) {
      console.error("Error al logear", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getToken();
  };

  function handleModalLogin() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className="login-page">
      <div className="burger-images-container">
        <img
          src="src/assets/BurgerLogin1.png"
          alt="Burger 1"
          className="burgerLogin1"
        />
        <img
          src="src/assets/BurgerLogin3.png"
          alt="Burger 2"
          className="burgerLogin2"
        />
      </div>

      <div className="form-container">
        <h2 className="title">Sign in</h2>

        <CSSTransition
          nodeRef={loginNodeRef}
          in={true}
          appear={true}
          timeout={300}
          classNames="fade"
        >
          <form ref={loginNodeRef} className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                required
                type="email"
                className="input rounded-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="user-label-login">Email</label>
            </div>
            <div className="input-group">
              <input
                required
                type="password"
                className="input rounded-5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="user-label-login">Password</label>
            </div>
            <button type="submit" className="form-btn btnRed rounded-5">
              <span>Sign in</span>
            </button>
          </form>
        </CSSTransition>

        <div className="buttons-container">
          <button className="apple-login-button" onClick={handleModalLogin}>
            <Facebook className="apple-icon" />
            <span>Sign in with Facebook</span>
          </button>
          <button className="google-login-button" onClick={handleModalLogin}>
            <Google className="google-icon" />
            <span>Sign in with Google</span>
          </button>
        </div>

        <div className="text-center mt-3">
          <Link to="/register" className="sign-up-link">
            Not a member? Register
          </Link>
        </div>
      </div>

      {showModal && <NotAvailable handleClose={handleCloseModal} />}
    </div>
  );
}

export default Login;
