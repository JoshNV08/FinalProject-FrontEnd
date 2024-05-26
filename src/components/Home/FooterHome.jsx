import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import '../../Styles/FooterHome.css'

function FooterHome() {
  return (
    <Container fluid style={{ backgroundColor: "#FCDA51"}}>
      <Row className="align-items-center">
        <Col md={8} className="text-center ps-0">
          <Image src="../src/assets/ImageFooter.png" style={{width:'103%'}}/>
        </Col>
        <Col md={3} className="text">
          <div>
            <h4>NUESTROS HORARIOS</h4>
            <p>Lun - Viernes: 7am - 10pm</p>
            <p>Sabado: 24 horas</p>
            <p>Domingo: 24 horas</p>
          </div>
          <div>
            <h4>SUCURSALES</h4>
            <p>18 de Julio 1056, Montevideo</p>
            <p>Gorlero y Los Muergos, Punta del este</p>
          </div>
          <div>
            <h4>SEGUINOS EN NUESTRAS REDES</h4>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
          <div>
            <h4>CUPONES</h4>
            <h4>CONTACTO</h4>
            <h4>SOBRE NOSOTROS</h4>
            <h4>TRABAJA CON NOSOTROS</h4>
            <h4>PREGUNTAS FRECUENTES</h4>
            <h4>POLITICA DE PRIVACIDAD</h4>
          </div>
          <div>
            <p>rrhh@goodburger.com.uy</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterHome;
