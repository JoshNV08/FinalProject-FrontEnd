import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  productsFetch,
} from "./src/features/Products/productsSlice";
import loginReducer from "./src/features/Login/loginSlice";
import cartReducer, { getTotals } from "./src/features/Cart/cartSlice";
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
