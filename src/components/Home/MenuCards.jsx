import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import burgers from "../../data/burgers";
import snacks from "../../data/snacks";
import drinks from "../../data/drinks";

function MenuSection() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Container className="align-items-center justify-contents-center text-center p-4">
      <h2 className="fs-1">¿Qué te ofrecemos?</h2>
      <p className="text-muted fs-5">Sólo lo mejor para vos</p>

      <Row className="mt-4">
        <Col md={4}>
          <Card className="rounded-5">
            <Card.Img variant="top" src="../src/assets/burgerMenu.png" />
            <Card.Body>
              <Card.Title>HAMBURGUESAS</Card.Title>
              <Button
                variant="link"
                onClick={() => handleSectionClick("burgers")}>
                <i
                  className="bi bi-chevron-compact-down"
                  style={{ color: "#FE3031" }}></i>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="rounded-5">
            <Card.Img variant="top" src="../src/assets/Fritas.png" />
            <Card.Body>
              <Card.Title>PAPAS FRITAS</Card.Title>
              <Button
                variant="link"
                onClick={() => handleSectionClick("snacks")}>
                <i
                  className="bi bi-chevron-compact-down"
                  style={{ color: "#FE3031" }}></i>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="rounded-5">
            <Card.Img variant="top" src="../src/assets/Coca.png" />
            <Card.Body>
              <Card.Title>BEBIDAS</Card.Title>
              <Button
                variant="link"
                onClick={() => handleSectionClick("drinks")}>
                <i
                  className="bi bi-chevron-compact-down"
                  style={{ color: "#FE3031" }}></i>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {activeSection && (
        <div className="mt-4">
          <Carousel
            indicators={false}
            interval={null}
            className="cast-carousel">
            <Carousel.Item>
              <Row className="justify-content-center">
                {activeSection === "burgers" &&
                  burgers.map((burger) => (
                    <Col key={burger.id} xs={6} sm={4} md={2}>
                      <Card className="rounded-5">
                        <Card.Img variant="top" src={burger.image} />
                        <Card.Body>
                          <Card.Title>{burger.name}</Card.Title>
                          <Card.Text>{burger.description}</Card.Text>
                          <Card.Text>Price: ${burger.price}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                {activeSection === "snacks" &&
                  snacks.map((snack) => (
                    <Col key={snack.id} xs={6} sm={4} md={2}>
                      <Card className="rounded-5">
                        <Card.Img variant="top" src={snack.image} />
                        <Card.Body>
                          <Card.Title>{snack.name}</Card.Title>
                          <Card.Text>{snack.description}</Card.Text>
                          <Card.Text>Price: ${snack.price}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                {activeSection === "drinks" &&
                  drinks.map((drink) => (
                    <Col key={drink.id} xs={6} sm={4} md={2}>
                      <Card className="rounded-5">
                        <Card.Img variant="top" src={drink.image} />
                        <Card.Body>
                          <Card.Title>{drink.name}</Card.Title>
                          <Card.Text>{drink.description}</Card.Text>
                          <Card.Text>Price: ${drink.price}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      )}

      <div className="text-center mt-4">
        <Button variant="transparent" href="/menu" className="rounded-5" style={{backgroundColor:'#ff3030', color:'white'}}>
          VER MENÚ
        </Button>
      </div>
    </Container>
  );
}

export default MenuSection;
