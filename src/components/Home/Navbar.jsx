import React from "react";
import {
  Navbar,
  Container,
  Col,
  Row,
  Nav as BootstrapNav,
} from "react-bootstrap";
import "../../Styles/Home/Navbar.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Nav() {
  const iconStyle = {
    fontSize: "25px",
    color: "#fe3030",
    backgroundColor: "#ffcc00",
    padding: "5px",
    borderRadius: "25%",
  };

  return (
    <Navbar className="navbar-custom">
      <Container>
        <Row className="align-items-center w-100">
          <Col xs={6} md={6}>
            <Navbar.Brand as={Link} to="/" className="logo-container">
              <img src={Logo} alt="Good Burger Logo" className="logo" />
            </Navbar.Brand>
          </Col>
          <Col
            xs={6}
            md={6}
            className="d-flex justify-content-end align-items-center"
          >
            <BootstrapNav className="d-none d-md-flex">
              <BootstrapNav.Link
                as={Link}
                to="/login"
                className="fs-5 text-contact"
              >
                Login
              </BootstrapNav.Link>
              <BootstrapNav.Link
                as={Link} to="/workwithus"
                className="fs-5 text-contact"
              >
                Work with us
              </BootstrapNav.Link>
              <BootstrapNav.Link as={Link} to="/cart">
                <i
                  className="bi bi-bag-check"
                  style={{ fontSize: "25px", color: "#fe3030" }}
                ></i>
              </BootstrapNav.Link>
              <div className="social-icons">
                <BootstrapNav.Link as={Link} to="https://www.facebook.com/goodburger">
                  <i className="bi bi-facebook" style={iconStyle}></i>
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="https://www.instagram.com/goodburger">
                  <i className="bi bi-instagram" style={iconStyle}></i>
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="https://www.twitter.com/goodburger">
                  <i className="bi bi-twitter-x" style={iconStyle}></i>
                </BootstrapNav.Link>
              </div>
            </BootstrapNav>
            <div className="d-flex d-md-none flex-column align-items-end">
              <BootstrapNav.Link as={Link} to="/cart">
                <i
                  className="bi bi-bag-check"
                  style={{ fontSize: "30px", color: "#fe3030" }}
                ></i>
              </BootstrapNav.Link>
              <BootstrapNav.Link as={Link} to="/login" className="fs-5 text-contact">
                Login
              </BootstrapNav.Link>
              <BootstrapNav.Link
                as={Link} to="/workwithus"
                className="mb-2 text-contact"
                style={{
                  fontWeight: "bolder",
                  color: "#ff3030",
                  fontSize: "15px",
                }}
              >
                Work with us
              </BootstrapNav.Link>
              <div className="social-icons">
                <BootstrapNav.Link as={Link} to="https://www.facebook.com/goodburger">
                  <i className="bi bi-facebook" style={iconStyle}></i>
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="https://www.instagram.com/goodburger">
                  <i className="bi bi-instagram" style={iconStyle}></i>
                </BootstrapNav.Link>
                <BootstrapNav.Link as={Link} to="https://www.twitter.com/goodburger">
                  <i className="bi bi-twitter-x" style={iconStyle}></i>
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
