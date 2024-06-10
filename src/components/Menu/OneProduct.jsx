import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice";
import '../../Styles/Buttons/ButtonsMenu.css';

function OneProduct({ id }) {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  function addToCart() {
    if (product) {
      dispatch(addItem({ id: product.id, name: product.name, price: product.price }));
    }
  }

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

  function handleCustomizationChange(e) {
    console.log(`${e.target.name}: ${e.target.value}`);
  }

  function renderCustomizationOptions() {
    if (!product) return null;

    switch (product.categoryId) {
      case 1:
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Quitar</Form.Label>
              <Form.Select name="removeOptions" onChange={handleCustomizationChange}>
                <option value="">Seleccione que desea sacar</option>
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
                <option value="">Agrega un extra</option>
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
        );
      case 3:
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Choose your Size</Form.Label>
              <Form.Select name="size" onChange={handleCustomizationChange}>
                <option value="">Seleccione tamaño</option>
                <option value="zero">Zero</option>
                <option value="original">Comun</option>
                <option value="light">Light</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Temperatura</Form.Label>
              <Form.Select name="extras" onChange={handleCustomizationChange}>
                <option value="">Seleccione temperatura</option>
                <option value="natural">Natural</option>
                <option value="cold">Fría</option>
              </Form.Select>
            </Form.Group>
          </>
        );
      case 2:
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Elija el tamaño</Form.Label>
              <Form.Select name="size" onChange={handleCustomizationChange}>
                <option value="">Seleccione tamaño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Extra</Form.Label>
              <Form.Select name="extras" onChange={handleCustomizationChange}>
                <option value="">Seleccione extras</option>
                <option value="bacon">Bacon</option>
                <option value="cheddar">Cheddar</option>
              </Form.Select>
            </Form.Group>
          </>
        );
      case 5:
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Selecciona ingrediente</Form.Label>
              <Form.Select name="ingredient" onChange={handleCustomizationChange}>
                <option value="">Seleccione</option>
                <option value="sugar">Azúcar</option>
                <option value="sweetener">Edulcorante</option>
                <option value="stevia">Stevia</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tamaño</Form.Label>
              <Form.Select name="size" onChange={handleCustomizationChange}>
                <option value="">Seleccione tamaño</option>
                <option value="medium">Mediano</option>
                <option value="large">Grande</option>
              </Form.Select>
            </Form.Group>
          </>
        );
      default:
        return null;
    }
  }

  return (
    <Container>
      <Row className="align-items-center my-3">
        <Col xs="auto">
          <Button as="a" size="sm" href="/menu" className="btnMenu rounded-5">
            <span>Volver al Menu</span>
          </Button>
        </Col>
        <Col className="justify-content-end d-flex mx-md-3">
          {product && <h2 className="mb-0 ">{product.name}</h2>}
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          {product && (
            <div className="text-center">
              <img
                src={product.photo}
                alt={product.name}
                className="img-fluid rounded"
                style={{ width: '100%', maxWidth: '400px' }}
              />
            </div>
          )}
        </Col>
        <Col md={6}>
          {product && (
            <Form className="p-3">
              <fieldset>
                {renderCustomizationOptions()}
                <Button className="btnMenu rounded-5 mt-3 w-100" href="/cart" onClick={addToCart}>
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
