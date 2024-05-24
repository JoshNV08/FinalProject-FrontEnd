import React from 'react';
import burgers from '../data/burgers';
import { Col, Row, Card, Container } from 'react-bootstrap';

function MenuItem() {
  return (
    <Container>
      <Row>
        {burgers.map((burger) => (
          <Col md={4} key={burger.id}>
            <Card>
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

export default MenuItem;
