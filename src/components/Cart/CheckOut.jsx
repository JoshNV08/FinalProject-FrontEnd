import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import axios from "axios";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
    address: "",
    phone: "",
    comments: "",
  });
  const [focus, setFocus] = useState("");

  // const token = localStorage.getItem("token");

  const token = useSelector((state) => state.user.token);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      cartItems: cart.cartItems,
      totalAmount: cart.cartTotalAmount,
      deliveryDetails: {
        address: formData.address,
        phone: formData.phone,
        comments: formData.comments,
      },
      paymentDetails: {
        cvc: formData.cvc,
        expiry: formData.expiry,
        name: formData.name,
        number: formData.number,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/orders",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        alert("Payment and order processed successfully!");
      } else {
        alert("There was an issue processing your payment. Please try again.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert(
        "An error occurred while processing your payment. Please try again."
      );
    }
  };

  return (
    <Container className="checkout-container my-5">
      <Row className="justify-content-center">
        <Col sm={12} md={7} className="shadow-lg rounded-5 me-4">
          <div className="checkout-details">
            <h3>Order Summary</h3>
            {cart.cartItems.map((cartItem) => (
              <div className="checkout-item" key={cartItem.id}>
                <p>
                  {cartItem.name} x {cartItem.cartQuantity}
                </p>
                <p>Total: ${cartItem.price * cartItem.cartQuantity}</p>
              </div>
            ))}
            <div className="subtotal">
              <h4>Subtotal: ${cart.cartTotalAmount}</h4>
            </div>
          </div>

          <div className="delivery-details mt-4">
            <h3>Delivery Details</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="comments">
                <Form.Label>Additional Comments</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Any additional details or instructions"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </div>
        </Col>

        <Col sm={12} md={4} className="checkout-form shadow-lg rounded-5">
          <h3>Payment Details</h3>
          <Cards
            cvc={formData.cvc}
            expiry={formData.expiry}
            name={formData.name}
            number={formData.number}
            focused={focus}
          />
          <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name on Card</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="number">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter card number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                onFocus={handleFocus}
                required
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="expiry">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="MM/YY"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="cvc">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="CVV"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  required
                />
              </Form.Group>
            </Row>
            <Button variant="none" type="submit" className="checkout-btn">
              Pay Now
            </Button>
          </Form>
          <Link to="/cart">
            <Button variant="none" className="back-to-cart">
              <FaArrowLeft /> Back to Cart
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckOut;
