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
              <a href="https://www.instagram.com/goodburger">Instagram</a> - <a href="https://www.facebook.com/goodburger">Facebook</a> -{" "}
              <a href="https://x.com/goodburger">Twitter</a>
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
        <p className="text-muted justify-content-end d-flex mt-3">© 2024 GoodBurger. Todos los derechos reservados.</p>
      </Row>
    </Container>
  );
}

export default Footer;
