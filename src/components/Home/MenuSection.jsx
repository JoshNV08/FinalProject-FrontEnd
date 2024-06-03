import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import burgers from "../../data/burgers";
import snacks from "../../data/snacks";
import drinks from "../../data/drinks";
import coffee from "../../data/coffee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/ButtonRed.css";

function MenuSection() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Container className="align-items-center justify-contents-center text-center p-4">
      <h2 className="fs-1 font-weight-bold">¿Qué te ofrecemos?</h2>
      <p className="text-muted fs-5">Sólo lo mejor para vos</p>

      <Row className="mt-4">
        <Col xs={6} md={4}>
          <Card className="rounded-5 mb-4">
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
        <Col xs={6} md={4}>
          <Card className="rounded-5 mb-4">
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
        <Col xs={6} md={4}>
          <Card className="rounded-5 mb-4">
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
        <Col xs={6} md={4} className="d-md-none text-center">
          <Card className="rounded-5 mb-4">
            <Card.Img variant="top" src="../src/assets/Coffee.png" />
            <Card.Body>
              <Card.Title>CAFETERÍA</Card.Title>
              <Button
                variant="link"
                onClick={() => handleSectionClick("coffee")}>
                <i
                  className="bi bi-chevron-compact-down"
                  style={{ color: "#FE3031" }}></i>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {activeSection && (
        <div>
          <Slider {...settings} className="mt-2 mb-5">
            {activeSection === "burgers" &&
              burgers.map((burger) => (
                <div key={burger.id}>
                  <Card className="rounded-5 mx-1">
                    <Card.Img variant="top" src={burger.image} />
                    <Card.Body>
                      <Card.Title>{burger.name}</Card.Title>
                      <Card.Text>{burger.description}</Card.Text>
                      <Card.Text>Price: ${burger.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            {activeSection === "snacks" &&
              snacks.map((snack) => (
                <div key={snack.id}>
                  <Card className="rounded-5 mx-1">
                    <Card.Img variant="top" src={snack.image} />
                    <Card.Body>
                      <Card.Title>{snack.name}</Card.Title>
                      <Card.Text>{snack.description}</Card.Text>
                      <Card.Text>Price: ${snack.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            {activeSection === "drinks" &&
              drinks.map((drink) => (
                <div key={drink.id}>
                  <Card className="rounded-5 mx-1">
                    <Card.Img variant="top" src={drink.image} />
                    <Card.Body>
                      <Card.Title>{drink.name}</Card.Title>
                      <Card.Text>{drink.description}</Card.Text>
                      <Card.Text>Price: ${drink.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            {activeSection === "coffee" &&
              coffee.map((coffee) => (
                <div key={coffee.id}>
                  <Card className="rounded-5 mx-1">
                    <Card.Img variant="top" src={coffee.image} />
                    <Card.Body>
                      <Card.Title>{coffee.name}</Card.Title>
                      <Card.Text>{coffee.description}</Card.Text>
                      <Card.Text>Price: ${coffee.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </Slider>
        </div>
      )}

      <div className="text-center mt-4">
        <Button
          variant="transparent"
          href="/menu"
          className="rounded-5 btnRed"
          size="lg">
          <span>VER MENÚ</span>
        </Button>
      </div>
    </Container>
  );
}

export default MenuSection;
