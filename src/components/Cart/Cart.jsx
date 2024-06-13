import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../redux/cartSlice";
import '../../Styles/Cart/Cart.css';
import { Link } from "react-router-dom";
import { FaTrash, FaArrowLeft, FaPlus, FaMinus } from "react-icons/fa";

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
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-content">
        <div className="cart-items">
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
              <div className="cart-item" key={cartItem.id}>
                <img src={cartItem.photo} alt={cartItem.name} />
                <div className="cart-product-details">
                  <h3>{cartItem.name}</h3>
                  <p>{cartItem.description}</p>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      <FaMinus />
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(cartItem)}
                    className="remove-btn"
                  >
                    <FaTrash />
                  </button>
                </div>
                <div className="cart-product-total-price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-summary">
          <h3>Order Summary</h3>
          {cart.cartItems.length > 0 ? (
            <>
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button className="checkout-btn">Check out</button>
              <button className="clear-btn" onClick={handleClearCart}>
                Clear Cart
              </button>
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
        </div>
      </div>
    </div>
  );
};

export default Cart;
