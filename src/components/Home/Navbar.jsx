import React from "react";
import {
  Navbar,
  Container,
  Col,
  Row,
  Nav as BootstrapNav,
  Button,
} from "react-bootstrap";
import "../../Styles/Home/Navbar.css";

function Nav() {
  return (
    <Navbar className="navbar-custom">
      <Container>
        <Row className="align-items-center w-100">
          <Col xs={6} md={6} className="justify-content-start">
            <Navbar.Brand href="/" className="logo-container">
              <img
                src="../src/assets/Logo.png"
                alt="Good Burger Logo"
                className="logo"
              />
            </Navbar.Brand>
          </Col>
          <Col
            xs={6}
            md={6}
            className="d-flex justify-content-end align-items-center">
            <BootstrapNav className="d-none d-md-flex">
              <BootstrapNav.Link href="/login" className="fs-5 text-contact">
                Login
              </BootstrapNav.Link>
              <BootstrapNav.Link href="/trabajo" className="fs-5 text-contact">
                Trabaja con Nosotros
              </BootstrapNav.Link>
              <BootstrapNav.Link href="/cart">
                <i
                  className="bi bi-bag-check"
                  style={{ fontSize: "25px", color: "#fe3030" }}></i>
              </BootstrapNav.Link>
              <div className="social-icons">
                <BootstrapNav.Link href="https://www.facebook.com/goodburger">
                  <img
                    src="../src/assets/Facebook.png"
                    className="social-icon"
                    alt="Facebook"
                  />
                </BootstrapNav.Link>
                <BootstrapNav.Link href="https://www.Instagram.com/goodburger">
                  <img
                    src="../src/assets/Instagram.png"
                    className="social-icon"
                    alt="Instagram"
                  />
                </BootstrapNav.Link>
                <BootstrapNav.Link href="https://www.x.com/goodburger">
                  <img
                    src="../src/assets/Twitter.png"
                    className="social-icon"
                    alt="Twitter"
                  />
                </BootstrapNav.Link>
              </div>
            </BootstrapNav>
            <div className="d-flex d-md-none flex-column align-items-end">
              <BootstrapNav.Link href="/cart">
                <i
                  className="bi bi-bag-check"
                  style={{ fontSize: "25px", color: "#fe3030" }}></i>
              </BootstrapNav.Link>
              <BootstrapNav.Link href="/login" className="fs-5 text-contact">
                Login
              </BootstrapNav.Link>
              <BootstrapNav.Link
                href="/trabajo"
                className="mb-2 text-contact"
                style={{
                  fontWeight: "bolder",
                  color: "#ff3030",
                  fontSize: "15px",
                }}>
                Trabaja con Nosotros
              </BootstrapNav.Link>
              <div className="social-icons">
                <BootstrapNav.Link href="https://www.facebook.com/goodburger">
                  <img
                    src="../src/assets/Facebook.png"
                    className="social-icon"
                    alt="Facebook"
                  />
                </BootstrapNav.Link>
                <BootstrapNav.Link href="https://www.Instagram.com/goodburger">
                  <img
                    src="../src/assets/Instagram.png"
                    className="social-icon"
                    alt="Instagram"
                  />
                </BootstrapNav.Link>
                <BootstrapNav.Link href="https://www.x.com/goodburger">
                  <img
                    src="../src/assets/Twitter.png"
                    className="social-icon"
                    alt="Twitter"
                  />
                </BootstrapNav.Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Nav;
