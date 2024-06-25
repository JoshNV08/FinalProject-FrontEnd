import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const registerNodeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para registrar al usuario
    console.log("Registrando usuario:", { username, email, password });
  };

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
        <h2 className="title">Register</h2>

        <CSSTransition
          nodeRef={registerNodeRef}
          in={true}
          appear={true}
          timeout={300}
          classNames="fade"
        >
          <form ref={registerNodeRef} className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                required
                type="text"
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

        <div className="text-center mt-3">
          <Link to="/login" className="sign-up-link">
            Already a member? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
