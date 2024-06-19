import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../Styles/Home/Banner.css";
import BurgerModel from "./Burger3D";

function Header() {
  return (
    <>
      <Container className="banner-container">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-left">
            <div className="banner-text text-md-left">
              <h2 className="text-md-start">
                <span className="line">Savor</span>
                <span className="line">Each Bite</span>
                <span className="line">With Smiles</span>
              </h2>
              <p className="text-md-left">¡Burgers that make you happy!</p>
              <Button
                className="btnYellow rounded-5 fw-bold"
                size='lg'
                href="/menu">
                <span>ORDER NOW</span>
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
