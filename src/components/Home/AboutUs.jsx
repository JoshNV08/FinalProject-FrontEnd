import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../Styles/Home/AboutUs.css";

function AboutUs() {
  return (
    <Container fluid className="ps-0" style={{ backgroundColor: "#FCDA51" }}>
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src="../src/assets/Image2.png"
            alt="Hamburguesa"
            style={{ width: "103%" }}
          />
        </Col>
        <Col md={5} className=" text-md-start text-center mx-sm-0 mx-md-4 mb-5 mb-md-0">
          <h2 className="display-5 fw-bold my-5" style={{color:'#fe3030'}}>
            About Us
          </h2>
          <p className="lead">
          Discover excellence in burgers since 2024. In search of perfection
          perfection in every bite. We are the home of the good burger.
          </p>
          <Button
            variant="transparent"
            size="lg"
            className="my-3 rounded-5 fw-bold"
            href="/aboutus"
            style={{ backgroundColor: "#ff3030", color: "#fcda51" }}
          >
            READ MORE
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
