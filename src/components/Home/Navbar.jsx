import React from "react";
import { Navbar, Container, Nav as BootstrapNav } from "react-bootstrap";
import "../../Styles/Navbar.css";

function Nav() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/" className="logo-container">
          <img
            src="../src/assets/Logo.png"
            alt="Good Burger Logo"
            className="logo"
          />
        </Navbar.Brand>
        <BootstrapNav className="ms-auto">
          <BootstrapNav.Link
            href="/contact"
            className="fs-5"
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
        </BootstrapNav>
      </Container>
    </Navbar>
  );
}

export default Nav;
