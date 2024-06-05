import React from "react";
import coffee from "../../data/coffee";
import { Col, Row, Card, Container } from "react-bootstrap";
import "../../Styles/MenuCards.css";
import { useEffect, useState } from "react";
import axios from "axios";

function MenuCoffee() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);

  const FilteredCoffee = products.filter((item) => item.categoryId === 5);
  return (
    <Container className="py-5 text-center">
      <Row>
        {FilteredCoffee.map((coffee) => (
          <Col md={4} key={coffee.id} className="my-3 col-6">
            <Card className="rounded-5 custom-card">
              <Card.Img variant="top" src={coffee.photo} />
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
