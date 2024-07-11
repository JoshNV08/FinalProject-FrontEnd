import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Styles/Home/FooterHome.css";

function FooterHome() {
  return (
    <div className="FooterHome">
      <Container fluid>
        <Row className="align-items-center">
          <Col className="text-center ps-0">
            <Image
              src="src/assets/ImageFooter.png"
              alt="Footer Image"
              className="d-none d-md-block z-1 image-container imgfooter"
            />
          </Col>
          <Col md={3} className="text">
            <div>
              <h5>OUR SCHEDULES</h5>
              <p>Monday to Friday: 7am - 10pm</p>
              <p>Saturday: 24 hours</p>
              <p>Sunday: 24 hours</p>
            </div>
            <div>
              <h5>BRANCHES</h5>
              <p>
                <a href="https://www.google.com/maps/place/Av.+18+de+Julio+1056,+11100+Montevideo,+Departamento+de+Montevideo/@-34.9062121,-56.195986,17z/data=!3m1!4b1!4m6!3m5!1s0x959f802d4c7794a1:0xc078cf8ccece51ef!8m2!3d-34.9062165!4d-56.1934111!16s%2Fg%2F11gh01lrvd?entry=ttu" target="_blank" rel="noopener noreferrer">
                  18 de Julio 1056, Montevideo
                </a>
              </p>
              <p>
                <a href="https://www.google.com/maps/place/Los+Muergos+%26+Avenida+Juan+Gorlero,+20100+Punta+del+Este,+Departamento+de+Maldonado/@-34.961615,-54.9455168,17z/data=!3m1!4b1!4m6!3m5!1s0x957505727177e06f:0xa0b208b127d48dc2!8m2!3d-34.9616194!4d-54.9429419!16s%2Fg%2F11gdsxld5x?entry=ttu" target="_blank" rel="noopener noreferrer">
                  Gorlero y Los Muergos, Punta del Este
                </a>
              </p>
            </div>
            <div>
              <h5>FOLLOW US</h5>
              <p>
                <a href="https://www.instagram.com/goodburger" target="_blank" rel="noopener noreferrer">Instagram</a> -{" "}
                <a href="https://www.facebook.com/goodburger" target="_blank" rel="noopener noreferrer">Facebook</a> -{" "}
                <a href="https://twitter.com/goodburger" target="_blank" rel="noopener noreferrer">Twitter</a>
              </p>
            </div>
          </Col>
          <Col md={3} className="text">
            <div>
              <h5>DOWNLOAD OUR APP</h5>
              <p>
                <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran" target="_blank" rel="noopener noreferrer">IOS</a>
              </p>
              <p>
                <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran" target="_blank" rel="noopener noreferrer">Android</a>
              </p>
            </div>
            <div>
              <h5>
                <Link to="/coupons">COUPONS</Link>
              </h5>
              <h5>
                <Link to="/contact">CONTACT</Link>
              </h5>
              <h5>
                <Link to="/aboutus">ABOUT US</Link>
              </h5>
              <h5>
                <Link to="/workwithus">WORK WITH US</Link>
              </h5>
              <h5>
                <Link to="/faq">FREQUENTLY QUESTIONS</Link>
              </h5>
              <h5>
                <Link to="/privacy">POLICY OF PRIVACY</Link>
              </h5>
            </div>
            <div>
              <h5>
                <a href="mailto:rrhh@goodburger.com.uy">rrhh@goodburger.com.uy</a>
              </h5>
            </div>
            <span className="text-muted justify-content-md-end d-flex">
              © 2024 GoodBurger. All rights reserved.
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterHome;
