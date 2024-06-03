import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Styles/InfoExtend.css";

function InfoExtend() {
  return (
    <Container fluid className="ps-0" style={{ backgroundColor: "#fdfd96" }}>
      <Row className="align-items-center py-3">
        <div className="text-md-center text-center mx-sm-5 p-5">
          <h1 style={{ fontWeight: "bold" }}>¿Quienes Somos?</h1>
        </div>
        <Col md={5} className=" text-md-start text-center mx-sm-5">
          <h2
            style={{ fontWeight: "bold" }}
            className="display-5 text-danger my-5"
          >
            MISIÓN
          </h2>
          <p>
            Ser la cadena de restaurantes de hamburguesas preferida de la gente,
            la más rentable, proyectada a futuro y con las personas más
            talentosas, alineados a la visión y los valores de Good Burguer.
          </p>
        </Col>
        <Col>
          <img
            src="../src/assets/Local.png"
            alt="Hamburguesa"
            style={{ width: "90%" }}
          />
        </Col>
      </Row>
      <Row className="align-items-center py-3">
        <Col>
          <img
            src="../src/assets/BurguerAbout.png"
            alt="Hamburguesa"
            style={{ width: "90%", paddingLeft: "70px" }}
          />
        </Col>
        <Col md={5} className=" text-md-start text-center mx-sm-5">
          <h2
            style={{ fontWeight: "bold" }}
            className="display-5 text-danger my-5"
          >
            VISIÓN
          </h2>
          <p>
            Somos Good Burguer S.A., nos encontramos operando en Montevideo y
            Punta del Este. En Good Burguer servimos con orgullo las mejores
            hamburguesas, así como una variedad de auténticos productos
            preparados al momento y cuando nuestros clientes lo necesitan,
            siendo la mejor experiencia de comida rápida en el país. Contamos
            con una oferta de productos de excelente calidad, esmerada atención
            y un ambiente sorprendente, alineado con la filosofía de la empresa.
          </p>
        </Col>
      </Row>
      <Row className="align-items-center py-3">
        <Col md={5} className=" text-md-start text-center mx-sm-5">
          <h2
            style={{ fontWeight: "bold" }}
            className="display-5 text-danger my-5"
          >
            VALORES Y FILOSOFÍA
          </h2>
          <p>Estos son los principios que nos han guiado en la tarea:</p>
          <p>
            - Somos una empresa de crecimiento ordenado. Preferimos avanzar con
            pasos seguros, acompañando el crecimiento armonioso del negocio,
            cumpliendo siempre con nuestros requisitos legales y reglamentarios
            aplicables, estimulando la libre competencia y garantizando un
            mercado competitivo.
          </p>
          <p>
            - Para nosotros lo primero siempre es el cliente. Nuestros clientes
            merecen lo mejor que podamos ofrecerles en todo momento, tanto en
            relación a la comida rápida que elaboramos, como a los servicios que
            ofrecemos.
          </p>
          <p>
            - Trabajamos como empresa escuela, confiamos e invertimos recursos
            en nuestro equipo, para que ellos como personas y colaboradores
            crezcan, y nos ayuden a crecer como empresa.
          </p>
        </Col>
        <Col>
          <img
            src="../src/assets/BurguerAbout2.png"
            alt="Hamburguesa"
            style={{ width: "100%", paddingRight: "40px" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default InfoExtend;
