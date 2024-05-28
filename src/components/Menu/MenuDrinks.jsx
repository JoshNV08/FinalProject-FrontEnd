import React from "react";
import drinks from "../../data/drinks";
import { Col, Row, Card, Container } from "react-bootstrap";
import "../../Styles/MenuCards.css";

function MenuDrinks() {
  return (
    <Container className="py-5 text-center">
      <Row>
        {drinks.map((drink) => (
          <Col md={4} key={drink.id} className="my-3 col-6">
            <Card className="rounded-5 custom-card">
              <Card.Img variant="top" src={drink.image} />
              <Card.Body>
                <Card.Title>{drink.name}</Card.Title>
                <Card.Text>{drink.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MenuDrinks;
