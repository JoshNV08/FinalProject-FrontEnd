import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsFetch } from "./productsSlice";
import loginReducer from "./loginSlice";
import cartReducer, { getTotals } from "./cartSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    login: loginReducer,
  },
});

store.dispatch(productsFetch());
store.dispatch(getTotals());
export default store;
