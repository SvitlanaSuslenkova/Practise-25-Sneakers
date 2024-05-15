import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productLists/reducer";
import wishproductReducer from "./wishproductList/reducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    wishproduct: wishproductReducer,
  },
});
export default store;
