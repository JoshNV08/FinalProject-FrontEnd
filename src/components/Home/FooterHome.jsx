import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../Styles/FooterHome.css";

function FooterHome() {
  return (
    <div className="FooterHome">
      <Container fluid>
        <Row className="align-items-center">
          <Col className="text-center ps-0">
            <Image
              src="src/assets/ImageFooter.png"
              alt="Footer Image"
              className="d-none d-md-block z-1 image-container"
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
              <p>
                <a href="">18 de Julio 1056, Montevideo</a>
              </p>
              <p>
                <a href="">Gorlero y Los Muergos, Punta del este</a>
              </p>
            </div>
            <div>
              <h5>SEGUINOS EN NUESTRAS REDES</h5>
              <p>
                <a href="">Instagram</a> - <a href="">Facebook</a> -{" "}
                <a href="">Twitter</a>
              </p>
            </div>
          </Col>
          <Col md={3} className="text">
            <div>
              <h5>DESCARGA NUESTRA APP</h5>
              <p>
                <a href="">IOS</a>
              </p>
              <p>
                <a href="">Android</a>
              </p>
            </div>
            <div>
              <h5>
                <a href="/cupones">CUPONES</a>
              </h5>
              <h5>
                <a href="/contacto">CONTACTO</a>
              </h5>
              <h5>
                <a href="/sobrenosotros">SOBRE NOSOTROS</a>
              </h5>
              <h5>
                {" "}
                <a href="/trabajo">TRABAJA CON NOSOTROS</a>
              </h5>
              <h5>
                <a href="/faq">PREGUNTAS FRECUENTES</a>
              </h5>
              <h5>
                {" "}
                <a href="/priv">POLITICA DE PRIVACIDAD</a>
              </h5>
            </div>
            <div>
              <h4>
                <a href="">rrhh@goodburger.com.uy</a>
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterHome;
