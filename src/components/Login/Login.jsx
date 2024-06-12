import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Google, Facebook } from "react-bootstrap-icons";
import "../../Styles/Others/Login.css";
import "../../Styles/Buttons/ButtonYellow.css";
import NotAvailable from "../Others/NotAvailable"; 
import { login } from "../../features/Login/loginSlice"
import { useDispatch } from "react-redux";  
import axios from "axios";
import { useEffect } from "react";


function Login() {
    const [email, setEmail] = useState("");
    const [Username, setUserName] = useState("");
    const [token, setToken] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();


   
    useEffect(() => {
      const LoginUser = async () => {
      try {
        const response = await axios.post("http://localhost:3000/tokens");
        console.log(response.data);
        setToken(response.data);
      } catch (error) {
        console.error("Error al logear", error);
      }
    };

    LoginUser();

    const body = {
      email: 'email',
      password: 'password'
  };
  
  async function addUser() {
      try {
          const response = await axios.post('/tokens', body);
          console.log(response);
      } catch (error) {
          console.log(error);
      }
  }
  
  addUser();
  
    })

  




    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(
        login({
         name: name,
         email: email,
         password: password,
         loggedIn: true,
        })
      );
    };
  const [isLogin, setIsLogin] = useState(true);
  const [showModal, setShowModal] = useState(false);

  function toggleForm() {
    setIsLogin(!isLogin);
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
        <h2 className="title">{isLogin ? "Sign in" : "Register"}</h2>

        <CSSTransition
          in={isLogin}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
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
          in={!isLogin}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <div className="input-group">
              <input
                required
                type="name"
                value={Username}
                className="input rounded-5"
                onChange={(e) => setUserName(e.target.value)}
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
            {isLogin ? "Not a member? Register" : "Already a member? Login"}
          </span>
        </div>
      </div>

      {showModal && <NotAvailable handleClose={handleCloseModal} />}
    </div>
  );
}

export default Login;
