import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsFetch } from "./src/features/Products/productsSlice";
import cartReducer, { getTotals } from "./src/features/Cart/cartSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

export default store;
