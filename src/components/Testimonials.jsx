import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Testimonials() {
  const testimonials = [
    {
      image: 'src/assets/messi.webp',
      title: 'The Online Food Hub',
      text: 'Testimonials are short quotes from people who love your brand. It\'s a great way to convince customers to try your services.',
      stars: 5,
    },
    {
      image: 'src/assets/cr7.webp',
      title: 'Food Pyramid Co.',
      text: 'Testimonials are short quotes from people who love your brand. It\'s a great way to convince customers to try your services.',
      stars: 5,
    },
    {
      image: 'src/assets/neymar.webp',
      title: 'Jul & Sons Co.',
      text: 'Testimonials are short quotes from people who love your brand. It\'s a great way to convince customers to try your services.',
      stars: 5,
    },
  ];

  return (
    <Container fluid style={{ backgroundColor: '#FF3D30', color: '#FFFFFF', padding: '40px' }}>
      <Row className="text-center mb-5">
        <Col>
          <h2>¿Qué dicen nuestros clientes?</h2>
          <p>Dejanos tu opinión en nuestras redes</p>
        </Col>
      </Row>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col key={index} md={4} className="text-center mb-4">
            <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
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
