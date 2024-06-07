import React from "react";
import desserts from "../../data/desserts";
import { Col, Row, Card, Container, Button } from "react-bootstrap";
import "../../Styles/MenuCards.css";
import axios from "axios";
import { useEffect, useState } from "react";


function MenuDesserts() {
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

  const  FilteredDesserts = products.filter((item) => item.categoryId === 4);

  return (
    <Container className="py-5 text-center">
      <Row>
        {FilteredDesserts.map((dessert) => (
          <Col md={4} key={dessert.id} className="my-3 col-6">
            <Card className="rounded-5 custom-card">
              <Card.Img variant="top" src={dessert.photo} />
              <Card.Body>
                <Card.Title>{dessert.name}</Card.Title>
                <Card.Text>{dessert.description}</Card.Text>
              </Card.Body>
              <Button className="btn btn-warning" href={`/productmenu/${dessert.id}`}>Agregar a Carrito</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MenuDesserts;
