import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Container, Row, Col, Card} from 'react-bootstrap'

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products/featured');
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error('Error fetching featured products', error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div>
      <Container className="py-5 text-center">
      <h2>Productos Destacados</h2>
      <Row>
        {featuredProducts.map((products) => (
          <Col md={4} key={products.id} className="my-3 col-6">
            <Card className="rounded-5 custom-card">
              <Card.Img variant="top" src={products.photo} />
              <Card.Body>
                <Card.Title>{products.name}</Card.Title>
                <Card.Text>{products.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default FeaturedProducts;
