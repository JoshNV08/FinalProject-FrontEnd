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
              <a href="https://www.google.com/maps/place/Av.+18+de+Julio+1056,+11100+Montevideo,+Departamento+de+Montevideo/@-34.9062121,-56.195986,17z/data=!3m1!4b1!4m6!3m5!1s0x959f802d4c7794a1:0xc078cf8ccece51ef!8m2!3d-34.9062165!4d-56.1934111!16s%2Fg%2F11gh01lrvd?entry=ttu">
                18 de Julio 1056, Montevideo
              </a>
            </p>
            <p>
              <a href="https://www.google.com/maps/place/Los+Muergos+%26+Avenida+Juan+Gorlero,+20100+Punta+del+Este,+Departamento+de+Maldonado/@-34.961615,-54.9455168,17z/data=!3m1!4b1!4m6!3m5!1s0x957505727177e06f:0xa0b208b127d48dc2!8m2!3d-34.9616194!4d-54.9429419!16s%2Fg%2F11gdsxld5x?entry=ttu">Gorlero y Los Muergos, Punta del este</a>
            </p>
          </div>
          <div>
            <h5>SEGUINOS EN NUESTRAS REDES</h5>
            <p>
              <a href="https://www.instagram.com/goodburger">Instagram</a> -{" "}
              <a href="https://www.facebook.com/goodburger">Facebook</a> -{" "}
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
            <h5>v
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
        <p className="text-muted justify-content-end d-flex">© 2024 GoodBurger. Todos los derechos reservados.</p>
      </Row>
    </Container>
    
  );
}

export default Footer;
