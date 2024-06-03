import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../../Styles/Contact.css"; // Make sure you have this CSS file

function Contact() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form id="form">
            <h2>Contact us</h2>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button type="submit" block className="mt-3 btnYellow rounded-5">
              <span>Send</span>
            </Button>
          </Form>
        </Col>

        <Col md={6} className="InfoContact">
          <h2>Información de Contacto</h2>
          <p>
            <strong>Teléfono:</strong> +598 99 856 458
          </p>
          <p>
            <strong>Email:</strong> contact@goodburger.uy
          </p>
          <h4>Horario de Atención:</h4>
          <p>
            <strong>Lunes a Viernes:</strong> 7am - 10pm
          </p>
          <p>
            <strong>Sábado:</strong> 24 horas
          </p>
          <p>
            <strong>Domingo:</strong> 24 horas
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
