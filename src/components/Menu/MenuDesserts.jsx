import React from "react";
import desserts from "../../data/desserts";
import { Col, Row, Card, Container } from "react-bootstrap";

function MenuDesserts() {
  return (
    <Container className="py-5">
      <Row>
        {desserts.map((dessert) => (
          <Col md={4} key={dessert.id} className="my-3">
            <Card className="rounded-5">
              <Card.Img variant="top" src={dessert.image} />
              <Card.Body>
                <Card.Title>{dessert.name}</Card.Title>
                <Card.Text>{dessert.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MenuDesserts;
