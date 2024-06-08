import React from "react";
import { Col, Row, Card, Container, Button } from "react-bootstrap";
import "../../Styles/Menu/MenuCards.css";
import axios from "axios";
import { useEffect, useState } from "react";

function MenuBurgers() {
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

  const filteredBurgers = products.filter((item) => item.categoryId === 1);

  return (
    <Container className="py-5 text-center">
      <Row>
        {filteredBurgers.map((burger) => (
          <Col md={4} key={burger.id} className="my-3 col-6">
            <Card className="rounded-5 custom-card">
              <Card.Img variant="top" src={burger.photo} />
              <Card.Body>
                <Card.Title>{burger.name}</Card.Title>
                <Card.Text>{burger.description}</Card.Text>
              </Card.Body>
              <Button className="btn btn-warning" href={`/productmenu/${burger.id}`}>Agregar a Carrito</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default MenuBurgers;
