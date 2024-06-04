import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Styles/InfoExtend.css";

function InfoExtend() {
  return (
    <Container fluid className="ps-0" style={{ backgroundColor: "#ffffff" }}>
      <Row className="align-items-center py-3">
        <div className="text-md-center text-center">
          <h1 style={{ fontWeight: "bold" }}>¿Quienes Somos?</h1>
        </div>
        <div className="d-flex justify-content-center">
          <Col md={5} className=" text-md-start text-center">
            <h2
              style={{ fontWeight: "bold" }}
              className="display-5 text-danger my-5 text-center"
            >
              MISIÓN
            </h2>
            <p>
              Ser la cadena de restaurantes de hamburguesas preferida de la
              gente, la más rentable, proyectada a futuro y con las personas más
              talentosas, alineados a la visión y los valores de Good Burguer.
            </p>
          </Col>
          <Col md={5} className=" text-md-start text-center mx-sm-5">
            <h2
              style={{ fontWeight: "bold" }}
              className="display-5 text-danger my-5 text-center"
            >
              VISIÓN
            </h2>
            <p>
              Somos Good Burguer S.A., nos encontramos operando en Montevideo y
              Punta del Este. En Good Burguer servimos con orgullo las mejores
              hamburguesas, así como una variedad de auténticos productos
              preparados al momento y cuando nuestros clientes lo necesitan,
              siendo la mejor experiencia de comida rápida en el país. Contamos
              con una oferta de productos de excelente calidad, esmerada
              atención y un ambiente sorprendente, alineado con la filosofía de
              la empresa.
            </p>
          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default InfoExtend;
