import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from './cartSlice';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity} - ${item.totalPrice.toFixed(2)}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
