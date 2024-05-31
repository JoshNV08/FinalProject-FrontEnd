import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  function toggleForm() {
    setIsLogin(!isLogin);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center mb-5">
        <Col md="4">
          {isLogin ? (
            <>
              <h2 className="text-center">Sign in</h2>
              <div className="d-flex justify-content-center my-3">
                <Button variant="outline-primary" className="mx-1"><i className="fab fa-facebook-f"></i></Button>
                <Button variant="outline-danger" className="mx-1"><i className="fab fa-google"></i></Button>
                <Button variant="outline-info" className="mx-1"><i className="fab fa-twitter"></i></Button>
                <Button variant="outline-dark" className="mx-1"><i className="fab fa-github"></i></Button>
              </div>
              <h5 className="text-center my-3">or</h5>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email or username</Form.Label>
                  <Form.Control type="email" placeholder="Enter email or username" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button variant="primary" type="submit">
                    Sign in
                  </Button>
                  <a href="/forgot-password" className="text-right">Forgot password?</a>
                </div>
              </Form>
              <div className="text-center mt-3">
                <a href="#" onClick={toggleForm}>Not a member? Register</a>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-center">Register</h2>
              <Form>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Register
                </Button>
              </Form>
              <div className="text-center mt-3">
                <a href="#" onClick={toggleForm}>Already a member? Login</a>
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
