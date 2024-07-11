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
        <Col
          md={5}
          className=" text-md-start text-center mx-sm-0 mx-md-4 mb-5 mb-md-0">
          <h2 className="display-5 fw-bold my-5" style={{ color: "#fe3030" }}>
            About Us
          </h2>
          <p className="lead">
          Discovering excellence in burgers since 2024, where each bite is crafted with a commitment to perfection. At our establishment, we pride ourselves on being the ultimate destination for burger enthusiasts seeking unparalleled quality and flavor. From meticulously sourced ingredients to artisanal preparation techniques, we are dedicated to elevating the art of burger-making. Join us on a culinary journey where every detail matters, ensuring that each visit is a memorable celebration of the timeless appeal of a truly exceptional burger experience. <br/> Welcome to Good Burger home of the good burger!
          </p>
          <Button
            variant="transparent"
            size="lg"
            className="my-3 rounded-5 fw-bold"
            href="/aboutus"
            style={{ backgroundColor: "#ff3030", color: "#fcda51" }}>
            READ MORE
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
