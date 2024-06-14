import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../redux/cartSlice";
import "../../Styles/Cart/Cart.css";
import { Link } from "react-router-dom";
import { FaTrash, FaArrowLeft, FaPlus, FaMinus } from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Container className="cart-container my-5">
      <Row className="cart-content">
        <Col sm={12} md={7} className="cart-items shadow-lg rounded-5 me-4">
          {cart.cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is currently empty</p>
              <div className="start-shopping">
                <Link to="/menu">
                  <FaArrowLeft size={20} />
                  <span>Start Shopping</span>
                </Link>
              </div>
            </div>
          ) : (
            cart.cartItems.map((cartItem) => (
              <div className="cart-item " key={cartItem.id}>
                <img src={cartItem.photo} alt={cartItem.name} />
                <div className="cart-product-details">
                  <h3>{cartItem.name}</h3>
                  <p>{cartItem.description}</p>
                  <div className="cart-product-quantity">
                    <Button
                      variant="outline-secondary"
                      onClick={() => handleDecreaseCart(cartItem)}>
                      <FaMinus />
                    </Button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <Button
                      variant="outline-secondary"
                      onClick={() => handleAddToCart(cartItem)}>
                      <FaPlus />
                    </Button>
                  </div>
                  <Button
                    variant="link"
                    onClick={() => handleRemoveFromCart(cartItem)}
                    className="remove-btn">
                    <FaTrash />
                  </Button>
                </div>
                <div className="cart-product-total-price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))
          )}
        </Col>
        <Col sm={12} md={4} className="cart-summary shadow-lg rounded-5">
          <h3>Order Summary</h3>
          {cart.cartItems.length > 0 ? (
            <>
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <Button variant="none" className="checkout-btn">
                Check out
              </Button>
              <Button
                variant="none"
                className="clear-btn"
                onClick={handleClearCart}>
                Clear Cart
              </Button>
            </>
          ) : (
            <div className="empty-summary">
              <p>No items in the cart</p>
            </div>
          )}
          <div className="continue-shopping">
            <Link to="/menu">
              <FaArrowLeft size={20} />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
