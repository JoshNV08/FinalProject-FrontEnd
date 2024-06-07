import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

function OneProduct({ id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching the product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleCustomizationChange = (e) => {
    console.log(`${e.target.name}: ${e.target.value}`);
  };

  return (
    <Container>
      <Row>
        <div className="d-flex justify-content-start my-3">
        <Button as="a" size="sm" href="/menu" className="btnYellow"><span>Volver Atrás</span></Button>
        </div>
        <Col md={6}>
          {product && (
            <>
              <h3>{product.name}</h3>
              <img
                src={product.photo}
                alt={product.name}
                style={{ width: "70%" }}
              />
            </>
          )}
        </Col>
        <Col md={6}>
          {product && (
            <Form>
              <fieldset>
                <Form.Group className="mb-3">
                  <Form.Label>Customize your Burger</Form.Label>
                  <Form.Select onChange={handleCustomizationChange}>
                    <option>More Lettuce</option>
                    <option>Remove Tomato</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Add-ons</Form.Label>
                  <Form.Select onChange={handleCustomizationChange}>
                    <option>Extra Cheese</option>
                    <option>Bacon</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Special Instructions</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Anything else you want to add?"
                    onChange={handleCustomizationChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id="termsCheckbox"
                    label="I agree to the terms and conditions."
                  />
                </Form.Group>
                <Button type="submit" className="btnYellow">
                  <span>Add to Cart</span>
                </Button>
              </fieldset>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default OneProduct;
