import React from "react";
import { Container, Row, Col, Button, Navbar } from "react-bootstrap";
import "../Styles/Banner.css";

function Header() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
            <img
              src="../src/assets/Logo.png"
              alt="Good Burger Logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="/Jobs" className=" fs-5 text-danger" style={{fontWeight:'bolder'}}>Trabaja con Nostros</a>
              <a href="https://www.facebook.com">
                <img
                  src="../src/assets/Facebook.png"
                  className="mx-1"
                  style={{ width: "35px" }}
                />
              </a>
              <a href="https://www.Instagram.com">
                {" "}
                <img
                  src="../src/assets/Instagram.png"
                  className="mx-1"
                  style={{ width: "35px" }}
                />
              </a>
              <a href="https://www.x.com/">
                {" "}
                <img
                  src="../src/assets/Twitter.png"
                  className="mx-1"
                  style={{ width: "35px" }}
                />
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="banner-container">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-left">
            <div className="banner-text">
              <h2 className="text-md-start">
                <span className="line">Cada</span>
                <span className="line">bocado</span>
                <span className="line">una sonrisa</span>
              </h2>
              <p>¡Hamburguesas que te hacen feliz!</p>
              <Button variant="transparent" className="order-button">
                ORDERNA YA
              </Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="../src/assets/BurgerHome.png"
              alt="Hamburguesa"
              className="burger-image"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
