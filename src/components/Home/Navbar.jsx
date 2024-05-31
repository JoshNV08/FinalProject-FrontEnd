import React from "react";
import {
  Navbar,
  Container,
  Col,
  Row,
  Nav as BootstrapNav,
} from "react-bootstrap";
import "../../Styles/Navbar.css";

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
            className="d-flex justify-content-end align-items-center"
          >
            <BootstrapNav className="d-none d-md-flex">
              <BootstrapNav.Link href="/login" className="fs-5 text-contact">
                Login
              </BootstrapNav.Link>
              <BootstrapNav.Link href="/trabajo" className="fs-5 text-contact">
                Trabaja con Nosotros
              </BootstrapNav.Link>
              <div className="social-icons">
                <BootstrapNav.Link href="https://www.facebook.com">
                  <img
                    src="../src/assets/Facebook.png"
                    className="social-icon"
                    alt="Facebook"
                  />
                </BootstrapNav.Link>
                <BootstrapNav.Link href="https://www.Instagram.com">
                  <img
                    src="../src/assets/Instagram.png"
                    className="social-icon"
                    alt="Instagram"
                  />
                </BootstrapNav.Link>
                <BootstrapNav.Link href="https://www.x.com/">
                  <img
                    src="../src/assets/Twitter.png"
                    className="social-icon"
                    alt="Twitter"
                  />
                </BootstrapNav.Link>
              </div>
            </BootstrapNav>
            <div className="d-flex d-md-none flex-column align-items-end">
              <BootstrapNav.Link href="/login" className="fs-5 text-contact">
                Login
              </BootstrapNav.Link>
              <BootstrapNav.Link
                href="/contact"
                className="fs-6 mb-2 text-contact"
                style={{ fontWeight: "bolder", color: "#ff3030" }}
              >
                Trabaja con Nosotros
              </BootstrapNav.Link>
              <div className="social-icons">
                <BootstrapNav.Link href="https://www.facebook.com">
                  <img
                    src="../src/assets/Facebook.png"
                    className="social-icon"
                    alt="Facebook"
                  />
                </BootstrapNav.Link>
                <BootstrapNav.Link href="https://www.Instagram.com">
                  <img
                    src="../src/assets/Instagram.png"
                    className="social-icon"
                    alt="Instagram"
                  />
                </BootstrapNav.Link>
                <BootstrapNav.Link href="https://www.x.com/">
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
