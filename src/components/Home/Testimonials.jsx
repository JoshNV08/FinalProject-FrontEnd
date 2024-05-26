import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import testimonials from '../../data/testimonials';


function Testimonials() {
  return (
    <Container fluid style={{ backgroundColor: '#FF3D30', color: '#FFFFFF', padding: '30px' }}>
      <Row className="text-center mb-3">
        <Col>
          <h2>¿Qué dicen nuestros clientes?</h2>
          <p>Dejanos tu opinión en nuestras redes</p>
        </Col>
      </Row>
      <Row>
        {testimonials.map((testimonial) => (
          <Col md={4}  className="text-center mb-1">
            <Card style={{ border: 'none', backgroundColor: 'transparent', color:'white' }}>
              <Card.Img
                variant="top"
                src={testimonial.image}
                style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', margin: '0 auto' }}
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>{testimonial.title}</Card.Title>
                <Card.Text>{testimonial.text}</Card.Text>
                <div>
                  {[...Array(testimonial.stars)].map((star, i) => (
                    <span key={i} role="img" aria-label="star">⭐</span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
