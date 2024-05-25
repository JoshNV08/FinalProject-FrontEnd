import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../Styles/AboutUs.css";

function AboutUs() {
  return (
    <Container fluid style={{ backgroundColor: "#FCDA51" }}>
      <Row className="align-items-center">
        <Col md={6} className=" ps-0">
          <img
            src="../src/assets/Image2.png"
            alt="Hamburguesa"
            style={{ width: "103%" }}
          />
        </Col>
        <Col md={5} className=" text-md-start text-center mx-sm-5">
          <h2 className="display-5 fw-bold text-danger my-5 ">
            Sobre Nosotros
          </h2>
          <p className="lead">
            Descubre la excelencia en hamburguesas desde 2024. En busca de la
            perfección en cada bocado. Somos la casa de la buena hamburguesa.
          </p>
          <Button
            variant="transparent"
            size="lg"
            className="my-3 rounded-5"
            href="/SobreNosotros" style={{backgroundColor:'#ff3030', color:'#fcda51'}}>
            LEER MÁS
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
