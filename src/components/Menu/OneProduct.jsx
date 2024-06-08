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
    return product.categoryId === 1 ? (
      <>
        <Form.Group className="mb-3">
          <Form.Label>Quitar</Form.Label>
          <Form.Select name="removeOptions" onChange={handleCustomizationChange}>
            
          <option value='' disabled >Seleccione que desea sacar</option>
            <option value="noLettuce">Sin Lechuga</option>
            <option value="noTomato">Sin Tomate</option>
            <option value="noMeat">Sin Carne</option>
            <option value="noBread">Sin Pan</option>
            <option value="noCondiments">Sin Condimentos</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Extras</Form.Label>
          <Form.Select name="addons" onChange={handleCustomizationChange}>
          <option value='' disabled >Agrega un extra</option>
            <option value="extraCheese">Extra Cheese</option>
            <option value="bacon">Bacon</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Indicación para su pedido</Form.Label>
          <Form.Control
            as="textarea"
            name="specialInstructions"
            placeholder="Te gustaría algo en especial?"
            onChange={handleCustomizationChange}
          />
        </Form.Group>
      </>
    ) : product.categoryId === 3 ? (
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
    ) : product.categoryId === 2 ? (
      <>
        <Form.Group className="mb-3">
          <Form.Label>Elija el tamaño</Form.Label>
          <Form.Select name="size" onChange={handleCustomizationChange}>
          <option value placeholder="">Seleccione tamaño</option>
            <option value="zero">Mediano</option>
            <option value="original">Grande</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Extra</Form.Label>
          <Form.Select name="extras" onChange={handleCustomizationChange}>
          <option value placeholder="">Seleccione extras</option>
            <option value="natural">Bacon</option>
            <option value="cold">Cheddar</option>
          </Form.Select>
        </Form.Group>
      </>
    ) : product.categoryId === 5 ? (
      <>
        <Form.Group className="mb-3">
          <Form.Label>Selecciona ingrediente</Form.Label>
          <Form.Select name="size" onChange={handleCustomizationChange}>
            <option value placeholder="">Seleccione</option>
            <option value="zero">Azúcar</option>
            <option value="original">Edulcorante</option>
            <option value="light">Stevia</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tamaño</Form.Label>
          <Form.Select name="extras" onChange={handleCustomizationChange}>
          <option value placeholder="">Seleccione tamaño</option>
            <option value="natural">Mediano</option>
            <option value="cold">Grande</option>
          </Form.Select>
        </Form.Group>
      </>
    )
    : null;
  }
  return (
    <Container>
      <Row>
        <div className="d-flex justify-content-start my-3">
          <Button as="a" size="sm" href="/menu" className="btnYellow rounded-5">
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
                <Button type="submit" className="btnYellow rounded-5">
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
