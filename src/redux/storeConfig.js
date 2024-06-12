import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsFetch } from "./productsSlice";
import userReducer from "./userSlice";
import cartReducer, { getTotals } from "./cartSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

store.dispatch(productsFetch());
store.dispatch(getTotals());
export default store;
