import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../Styles/Banner.css";
import BurgerModel from "./Burger3D";

function Header() {
  return (
    <>
      <Container className="banner-container">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-left">
            <div className="banner-text text-md-left">
              <h2 className="text-md-start">
                <span className="line">Cada</span>
                <span className="line">bocado</span>
                <span className="line">una sonrisa</span>
              </h2>
              <p className="text-md-left">¡Hamburguesas que te hacen feliz!</p>
              <Button
                className="btnYellow rounded-5 fw-bold"
                size='lg'
                href="/menu">
                <span>ORDENA YA</span>
              </Button>
            </div>
          </Col>
          <Col md={6} className="text-center" style={{ paddingBottom: "20px" }}>
            <BurgerModel />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
