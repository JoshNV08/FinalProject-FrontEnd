import React from "react";
import drinks from "../../data/drinks";
import { Col, Row, Card, Container } from "react-bootstrap";
import "../../Styles/MenuCards.css";
import axios from "axios";
import { useEffect, useState } from "react";

function MenuDrinks() {

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

    
  const filteredDrinks = products.filter((item) => item.categoryId === 3);

  return (
    <Container className="py-5 text-center">
      <Row>
        {filteredDrinks.map((drink) => (
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
