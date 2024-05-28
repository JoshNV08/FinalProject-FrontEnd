import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../Styles/Footer.css";

function Footer() {
  return (
    <Container fluid style={{ backgroundColor: "#FFE066" }}>
      <Row className="align-items-center TextFooter">
        <Col md={5} className="text-center ps-0">
          <Image
            src="../src/assets/LogoFooter.png"
            fluid
            style={{ maxHeight: "300px" }}
          />
        </Col>
        <Col md={3} className="text">
          <div>
            <h5>NUESTROS HORARIOS</h5>
            <p>Lunes a Viernes: 7am - 10pm</p>
            <p>Sábado: 24 horas</p>
            <p>Domingo: 24 horas</p>
          </div>
          <div>
            <h5>SUCURSALES</h5>
            <p>18 de Julio 1056, Montevideo</p>
            <p>Gorlero y Los Muergos, Punta del este</p>
          </div>
          <div>
            <h5>SEGUINOS EN NUESTRAS REDES</h5>
            <p>Instagram - Facebook - Twitter</p>
          </div>
        </Col>
        <Col md={3} className="text">
          <div>
            <h5>DESCARGA NUESTRA APP</h5>
            <p>IOS</p>
            <p>Android</p>
          </div>
          <div>
            <h5>CUPONES</h5>
            <h5>CONTACTO</h5>
            <h5>SOBRE NOSOTROS</h5>
            <h5>TRABAJA CON NOSOTROS</h5>
            <h5>PREGUNTAS FRECUENTES</h5>
            <h5>POLITICA DE PRIVACIDAD</h5>
          </div>
          <div>
            <h4>rrhh@goodburger.com.uy</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;