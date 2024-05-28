import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import testimonials from "../../data/testimonials";
import "../../Styles/Testimonials.css";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container fluid className="testimonials-container pb-5">
        <Row className="text-center mb-3">
          <Col>
            <h2>¿Qué dicen nuestros clientes?</h2>
            <p>Dejanos tu opinión en nuestras redes</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center mb-1">
                  <Card
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      color: "white",
                    }}>
                    <Card.Img
                      variant="top"
                      src={testimonial.image}
                      style={{
                        borderRadius: "50%",
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        margin: "0 auto",
                      }}
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        {testimonial.title}
                      </Card.Title>
                      <Card.Text>{testimonial.text}</Card.Text>
                      <div>
                        {[...Array(testimonial.stars)].map((star, i) => (
                          <span key={i} role="img" aria-label="star">
                            ⭐
                          </span>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>

      <div className="image-section d-md-none">
        <img
          src="src\assets\ImageFooter.png"
          alt="Girl Left"
          className="girl-image-left d-md-none"
        />
        <img
          src="src\assets\ImageFooter2.png"
          alt="Girl Right"
          className="girl-image-right d-md-none"
        />
      </div>
    </>
  );
}

export default Testimonials;
