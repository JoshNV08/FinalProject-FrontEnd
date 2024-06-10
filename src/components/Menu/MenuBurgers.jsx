import React from "react";
import "../../Styles/Menu/MenuCards.css";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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

  const filteredBurgers = products.filter((item) => item.categoryId === 1);

  return (
    <>
      <div className="container py-5 text-center d-none d-md-block">
        <div className="row">
          {filteredBurgers.map((burger) => (
            <div className="col-md-4 col-6 my-3" key={burger.id}>
              <div className="rounded-5 custom-card">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="text-dark d-flex justify-content-start mx-4 mt-3">
                      <h5>${burger.price}</h5>
                    </div>
                    <img
                      src={burger.photo}
                      alt={burger.name}
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-back">
                    <h5 className="card-title">{burger.name}</h5>
                    <p>{burger.description}</p>
                    <a
                      href={`/productmenu/${burger.id}`}
                      className="btn btn-warning rounded-4">
                      Agregar a Carrito
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Container className="py-5 text-center d-block d-md-none">
        <Row>
          {filteredBurgers.map((burger) => (
            <Col md={4} xs={6} className="my-3" key={burger.id}>
              <Card className="rounded-5 card-boot">
                <Card.Img variant="top" src={burger.photo} alt={burger.name} />
                <Card.Body>
                  <Card.Title>{burger.name}</Card.Title>
                  <Card.Text>
                    {burger.description}
                    <br />${burger.price}
                  </Card.Text>
                  <Button
                    href={`/productmenu/${burger.id}`}
                    className="btn btn-warning-card2 rounded-4">
                    Agregar a Carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default MenuBurgers;
