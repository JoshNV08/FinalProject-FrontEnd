import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../Styles/Buttons/ButtonsMenu.css";
import { addToCart } from "../../redux/cartSlice";

function OneProduct({ id }) {
  const [product, setProduct] = useState(null);
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
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
    return product.categoryId === 1 ? (
      <>
        <Form.Group className="mb-3">
          <Form.Label>Remove</Form.Label>
          <Form.Select
            name="removeOptions"
            onChange={handleCustomizationChange}>
            <option value="">Select what you want to remove</option>
            <option value="noLettuce">No Lettuce</option>
            <option value="noTomato">No Tomato</option>
            <option value="noMeat">No Meat</option>
            <option value="noBread">No Bread</option>
            <option value="noCondiments">No Condiments</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Add-ons</Form.Label>
          <Form.Select name="addons" onChange={handleCustomizationChange}>
            <option value="">Add an extra</option>
            <option value="extraCheese">Extra Cheese</option>
            <option value="bacon">Bacon</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Special Instructions</Form.Label>
          <Form.Control
            as="textarea"
            name="specialInstructions"
            placeholder="Would you like anything special?"
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
            <option value="original">Original</option>
            <option value="light">Light</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Temperature</Form.Label>
          <Form.Select name="extras" onChange={handleCustomizationChange}>
            <option value="natural">Natural</option>
            <option value="cold">Cold</option>
          </Form.Select>
        </Form.Group>
      </>
    ) : product.categoryId === 2 ? (
      <>
        <Form.Group className="mb-3">
          <Form.Label>Choose the size</Form.Label>
          <Form.Select name="size" onChange={handleCustomizationChange}>
            <option value="">Select size</option>
            <option value="zero">Medium</option>
            <option value="original">Large</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Extra</Form.Label>
          <Form.Select name="extras" onChange={handleCustomizationChange}>
            <option value="">Select extras</option>
            <option value="natural">Bacon</option>
            <option value="cold">Cheddar</option>
          </Form.Select>
        </Form.Group>
      </>
    ) : product.categoryId === 5 ? (
      <>
        <Form.Group className="mb-3">
          <Form.Label>Select ingredient</Form.Label>
          <Form.Select name="size" onChange={handleCustomizationChange}>
            <option value="">Select</option>
            <option value="zero">Sugar</option>
            <option value="original">Sweetener</option>
            <option value="light">Stevia</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Size</Form.Label>
          <Form.Select name="extras" onChange={handleCustomizationChange}>
            <option value="">Select size</option>
            <option value="natural">Medium</option>
            <option value="cold">Large</option>
          </Form.Select>
        </Form.Group>
      </>
    ) : null;
  }

  return (
    <Container>
      <Row className="align-items-center my-3">
        <Col xs="auto">
          <Button as="a" size="sm" href="/menu" className="btnMenu rounded-5">
            <span>Back to Menu</span>
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
                style={{ width: "100%", maxWidth: "400px" }}
              />
            </div>
          )}
        </Col>
        <Col md={6}>
          {product && (
            <Form className="p-3">
              <fieldset>
                {renderCustomizationOptions()}
                <Button
                  className="btnMenu rounded-5 mt-3 w-100"
                  onClick={() => handleAddToCart(product)}>
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
