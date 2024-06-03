import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { Facebook, Google, Twitter, Instagram } from "react-bootstrap-icons";
import "../../Styles/Login.css";
import "../../Styles/ButtonYellow.css";
import "../../Styles/ButtonRed.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  function toggleForm() {
    setIsLogin(!isLogin);
  }

  return (
    <>
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

      <Container fluid className="containerLogin text-center">
        <Row className="justify-content-md-center mb-5">
          <Col md="12">
            <div className="container">
              <h2 className="heading">{isLogin ? "Sign in" : "Register"}</h2>

              <div className="d-flex justify-content-center my-3">
                <Button variant="outline-primary" className="mx-1">
                  <Facebook />
                </Button>
                <Button variant="outline-danger" className="mx-1">
                  <Google />
                </Button>
                <Button variant="outline-info" className="mx-1">
                  <Twitter />
                </Button>
                <Button variant="outline-warning" className="mx-1">
                  <Instagram />
                </Button>
              </div>

              <h5 className="text-center my-3">or</h5>

              <CSSTransition
                in={isLogin}
                timeout={300}
                classNames="fade"
                unmountOnExit>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email or username</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email or username"
                      className="inputLogin"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="inputLogin"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                  <Button type="submit" className="btnRed rounded-5">
                    <span>Sign in</span>
                  </Button>
                </Form>
              </CSSTransition>

              <CSSTransition
                in={!isLogin}
                timeout={300}
                classNames="fade"
                unmountOnExit>
                <Form>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      className="inputRegister"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="inputRegister"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Ingresar Contraseña"
                      className="inputRegister"
                    />
                  </Form.Group>
                  <Button type="submit" className="mt-2 btnYellow rounded-5">
                    <span>Registrarse</span>
                  </Button>
                </Form>
              </CSSTransition>

              <div className="text-center mt-3">
                <a href="#" onClick={toggleForm}>
                  {isLogin
                    ? "Not a member? Register"
                    : "Already a member? Login"}
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
