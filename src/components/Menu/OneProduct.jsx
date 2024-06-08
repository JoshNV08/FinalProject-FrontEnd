import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

function OneProduct({ id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching the product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  function handleCustomizationChange(e) {
    console.log(`${e.target.name}: ${e.target.value}`);
  }



  function renderCustomizationOptions() {
    if (product.categoryId === 1) {
      return (
        <>
          <Form.Group className="mb-3">
            <Form.Label>Quitar</Form.Label>
            <Form.Select
              name="removeOptions"
              onChange={handleCustomizationChange}>
              <option value="noLettuce">Sin Lechuga</option>
              <option value="noTomato">Sin Tomate</option>
              <option value="noMeat">Sin Carne</option>
              <option value="noBread">Sin Pan</option>
              <option value="noCondiments">Sin Condimentos</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Add-ons</Form.Label>
            <Form.Select name="addons" onChange={handleCustomizationChange}>
              <option value="extraCheese">Extra Cheese</option>
              <option value="bacon">Bacon</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Special Instructions</Form.Label>
            <Form.Control
              as="textarea"
              name="specialInstructions"
              placeholder="Anything else you want to add?"
              onChange={handleCustomizationChange}
            />
          </Form.Group>
        </>
      );
    } else if (product.categoryId === 3) {
      return (
        <>
          <Form.Group className="mb-3">
            <Form.Label>Choose your Size</Form.Label>
            <Form.Select name="size" onChange={handleCustomizationChange}>
              <option value="zero">Zero</option>
              <option value="original">Comun</option>
              <option value="light">Light</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Temperatura</Form.Label>
            <Form.Select name="extras" onChange={handleCustomizationChange}>
              <option value="natural">Natural</option>
              <option value="cold">Fria</option>
            </Form.Select>
          </Form.Group>
        </>
      );
    }
  }

  return (
    <Container>
      <Row>
        <div className="d-flex justify-content-start my-3">
          <Button as="a" size="sm" href="/menu" className="btnYellow">
            <span>Volver al Menu</span>
          </Button>
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
                {renderCustomizationOptions()}
                <Button type="submit" className="btnYellow">
                  <span>Agregar al carrito</span>
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
