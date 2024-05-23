import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Styles/AboutUs.css";

function AboutUs() {
  return (
    <Container fluid style={{ backgroundColor: "#FCDA51"}}>
      <Row className="align-items-center">
        <Col md={6} className="p-0" >
          <img
            src="../src/assets/Image2.png"
            alt="Hamburguesa"
            className="img-full" 
          />
        </Col>
        <Col md={6} className="text-center text-md-start">
          <h2 className="display-5 fw-bold text-danger">Sobre Nosotros</h2>
          <p className="lead">
            Descubre la excelencia en hamburguesas desde 2024. En busca de la
            perfección en cada bocado. Somos la casa de la buena hamburguesa.
          </p>
          <Button variant="danger" size="lg">
            LEER MÁS
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
