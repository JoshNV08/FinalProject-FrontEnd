import React from "react";
import { Container, Row, Col, Button, Navbar } from "react-bootstrap";
import "../Styles/Banner.css";

function Header() {
  return (
    <>
     

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
