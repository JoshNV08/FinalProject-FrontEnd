import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Buttons/ButtonRed.css";

function MenuSection() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };

    fetchProducts();
  }, []);


  const filteredBurgers = products.filter((item) => item.categoryId === 1);
  const filteredSnacks = products.filter((item) => item.categoryId === 2);
  const filteredDrinks = products.filter((item) => item.categoryId === 3);
  const filteredCoffee = products.filter((item) => item.categoryId === 5);

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
      <h2 className="fs-1 font-weight-bold">What do we offer you?</h2>
      <p className="text-muted fs-5">Only the best for you</p>

      <Row className="mt-4">
        <Col xs={6} md={4}>
          <Card className="rounded-5 mb-4" style={{ height: "90%" }}>
            <Card.Img variant="top" src="../src/assets/burgerMenu.png" />
            <Card.Body>
              <Card.Title>BURGERS</Card.Title>
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
          <Card className="rounded-5 mb-4" style={{ height: "90%" }}>
            <Card.Img variant="top" src="../src/assets/Fritas.png" />
            <Card.Body>
              <Card.Title>FRENCH FRIES</Card.Title>
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
          <Card className="rounded-5 mb-4" style={{ height: "90%" }}>
            <Card.Img variant="top" src="../src/assets/Coca.png" />
            <Card.Body>
              <Card.Title>DRINKS</Card.Title>
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
          <Card className="rounded-5 mb-4" style={{ height: "90%" }}>
            <Card.Img variant="top" src="../src/assets/Coffee.png" />
            <Card.Body>
              <Card.Title>COFFEE</Card.Title>
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
          <Slider {...settings} className="mt-0 mb-5">
            {activeSection === "burgers" &&
              filteredBurgers.map((burger) => (
                <div key={burger.id}>
                  <Card className="fix rounded-5 h-75 mx-1">
                    <Card.Img variant="top" src={burger.photo} />
                    <Card.Body className="">
                      <Card.Title>{burger.name}</Card.Title>
                      <Card.Text>{burger.description}</Card.Text>
                      <Card.Text>Price: ${burger.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            {activeSection === "snacks" &&
              filteredSnacks.map((snack) => (
                <div key={snack.id}>
                  <Card className="rounded-5 mx-1">
                    <Card.Img variant="top" src={snack.photo} />
                    <Card.Body>
                      <Card.Title>{snack.name}</Card.Title>
                      <Card.Text>{snack.description}</Card.Text>
                      <Card.Text>Price: ${snack.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            {activeSection === "drinks" &&
              filteredDrinks.map((drink) => (
                <div key={drink.id}>
                  <Card className="rounded-5 img mx-1">
                    <Card.Img variant="top" src={drink.photo} />
                    <Card.Body>
                      <Card.Title>{drink.name}</Card.Title>
                      <Card.Text>{drink.description}</Card.Text>
                      <Card.Text>Price: ${drink.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            {activeSection === "coffee" &&
              filteredCoffee.map((coffee) => (
                <div key={coffee.id}>
                  <Card className="rounded-5 mx-1">
                    <Card.Img variant="top" src={coffee.photo} />
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
          <span>MENU</span>
        </Button>
      </div>
    </Container>
  );
}

export default MenuSection;
