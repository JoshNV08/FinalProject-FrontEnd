import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


function MenuSection() {
  return (
    <Container className="align-items-center justify-contents-center text-center p-4">
      <h2>¿Qué te ofrecemos?</h2>
      <p className="text-muted">Sólo lo mejor para vos</p>

      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="../src/assets/burgerMenu.png" />
            <Card.Body>
              <Card.Title>HAMBURGUESAS</Card.Title>
              <Button variant="link">
                <i
                  class="bi bi-chevron-compact-down"
                  style={{ color: "#FE3031" }}></i>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="../src/assets/Fritas.png" />
            <Card.Body>
              <Card.Title>PAPAS FRITAS</Card.Title>
              <Button variant="link">
                <i
                  class="bi bi-chevron-compact-down"
                  style={{ color: "#FE3031" }}></i>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="../src/assets/Coca.png" />
            <Card.Body>
              <Card.Title>BEBIDAS</Card.Title>
              <Button variant="link">
                <i
                  class="bi bi-chevron-compact-down"
                  style={{ color: "#FE3031" }}></i>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-4">
        <Button variant="danger">VER MENÚ</Button>
      </div>
    </Container>
  );
}

export default MenuSection;
