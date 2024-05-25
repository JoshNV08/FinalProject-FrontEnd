import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import '../Styles/Footer.css'

function Footer() {
  return (
    <Container fluid style={{ backgroundColor: "#FFE066"}}>
      <Row className="align-items-center">
        <Col md={5} className="text-center ps-0">
          <Image src="../src/assets/LogoFooter.png" fluid  style={{ maxHeight: "300px" }} />
        </Col>
        <Col md={6} style={{ color: "#FE3031", fontSize: "14px", paddingTop:'50px' }}>
          <Row>
            <Col md={6}>
              <div>
                <h5>NUESTROS HORARIOS</h5>
                <p>Lun - Viernes: 7am - 10pm</p>
                <p>Sabado: 24 horas</p>
                <p>Domingo: 24 horas</p>
              </div>
              <div>
                <h5>SUCURSALES</h5>
                <p>18 de Julio 1056, Montevideo</p>
                <p>Gorlero y Los Muergos, Punta del este</p>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h5>SEGUINOS EN NUESTRAS REDES</h5>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
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
                <p>rrhh@goodburger.com.uy</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
