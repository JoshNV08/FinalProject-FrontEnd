import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Google, Facebook } from "react-bootstrap-icons";
import "../../Styles/Others/Login.css";
import "../../Styles/Buttons/ButtonYellow.css";
import NotAvailable from "../Others/NotAvailable";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { setToken } from "../../redux/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const loginUser = async () => {
  //     try {
  //       const response = await axios.post("http://localhost:3000/tokens");
  //       console.log(response.data);
  //       setToken(response.data);
  //     } catch (error) {
  //       console.error("Error al logear", error);
  //     }
  //   };

  //   loginUser();
  // });

  const getToken = async () => {
    try {
      const response = await axios.post("http://localhost:3000/tokens", {
        email,
        password,
      });
      dispatch(setToken(response.data.token));
    } catch (error) {
      // TODO: implementar react-tostify
      console.error("Error al logear", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    getToken();

    // dispatch(
    //   login({
    //     username: username,
    //     email: email,
    //     password: password,
    //     loggedIn: true,
    //   })
    // );
  };

  function toggleForm() {
    setIsLogged(!isLogged);
  }

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
        <h2 className="title">{isLogged ? "Sign in" : "Register"}</h2>

        <CSSTransition
          in={isLogged}
          timeout={300}
          classNames="fade"
          unmountOnExit>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
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

        <CSSTransition
          in={!isLogged}
          timeout={300}
          classNames="fade"
          unmountOnExit>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <div className="input-group">
              <input
                required
                type="name"
                value={username}
                className="input rounded-5"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="user-label-login">Username</label>
            </div>
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
            <button type="submit" className="form-btn btnYellow rounded-5">
              <span>Register</span>
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
          <span onClick={toggleForm} className="sign-up-link">
            {isLogged ? "Not a member? Register" : "Already a member? Login"}
          </span>
        </div>
      </div>

      {showModal && <NotAvailable handleClose={handleCloseModal} />}
    </div>
  );
}

export default Login;
