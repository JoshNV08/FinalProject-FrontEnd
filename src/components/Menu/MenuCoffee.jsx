import React from "react";
import coffee from "../../data/coffee";
import { Col, Row, Card, Container } from "react-bootstrap";

function MenuCoffee() {
  return (
    <Container className="py-5">
      <Row>
        {coffee.map((coffee) => (
          <Col md={4} key={coffee.id} className="my-3">
            <Card className="rounded-5">
              <Card.Img variant="top" src={coffee.image} />
              <Card.Body>
                <Card.Title>{coffee.name}</Card.Title>
                <Card.Text>{coffee.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MenuCoffee;
