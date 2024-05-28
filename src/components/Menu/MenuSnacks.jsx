import React from "react";
import snacks from "../../data/snacks";
import { Col, Row, Card, Container } from "react-bootstrap";
import "../../Styles/MenuCards.css";

function MenuSnacks() {
  return (
    <Container className="py-5 text-center">
      <Row>
        {snacks.map((snack) => (
          <Col md={4} key={snack.id} className="my-3 col-6">
            <Card className="rounded-5 custom-card">
              <Card.Img variant="top" src={snack.image} />
              <Card.Body>
                <Card.Title>{snack.name}</Card.Title>
                <Card.Text>{snack.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MenuSnacks;
