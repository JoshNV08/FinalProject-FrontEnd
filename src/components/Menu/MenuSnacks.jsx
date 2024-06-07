import React from "react";
import { Col, Row, Card, Container, Button } from "react-bootstrap";
import "../../Styles/MenuCards.css";
import { useEffect, useState } from "react";
import axios from "axios";

function MenuSnacks() {
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

  const filteredSnacks = products.filter((item) => item.categoryId === 2);

  return (
    <Container className="py-5 text-center">
      <Row>
        {filteredSnacks.map((snack) => (
          <Col md={4} key={snack.id} className="my-3 col-6">
            <Card className="rounded-5 custom-card">
              <Card.Img variant="top" src={snack.photo} />
              <Card.Body>
                <Card.Title>{snack.name}</Card.Title>
                <Card.Text>{snack.description}</Card.Text>
              </Card.Body>
              <Button as="a" href={`/productmenu/${snack.id}`}>Agregar a Carrito</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MenuSnacks;
