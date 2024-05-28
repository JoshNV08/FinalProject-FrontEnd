import React from "react";
import burgers from "../../data/burgers";
import { Col, Row, Card, Container } from "react-bootstrap";
import "../../Styles/MenuCards.css";

function MenuBurgers() {
  return (
    <Container className="py-5 text-center">
      <Row>
        {burgers.map((burger) => (
          <Col md={4} key={burger.id} className="my-3 col-6">
            <Card className="rounded-5 custom-card">
              <Card.Img variant="top" src={burger.image} />
              <Card.Body>
                <Card.Title>{burger.name}</Card.Title>
                <Card.Text>{burger.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MenuBurgers;
