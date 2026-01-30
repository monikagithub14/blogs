import { configureStore } from "@reduxjs/toolkit";
import { ProductsAPI } from "./API/ProductsAPI";
import { CartAPI } from "./API/CartAPI";
import { UsersAPI } from "./API/UsersAPI";
import { AddressAPI } from "./API/AddressAPI";
import { OrderAPI } from "./API/OrderAPI";

const store = configureStore({
  reducer: {
    [ProductsAPI.reducerPath]: ProductsAPI.reducer,
    [CartAPI.reducerPath]: CartAPI.reducer,
    [UsersAPI.reducerPath]: UsersAPI.reducer,
    [AddressAPI.reducerPath]: AddressAPI.reducer,
    [OrderAPI.reducerPath]: OrderAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ProductsAPI.middleware,
    CartAPI.middleware,
    UsersAPI.middleware,
    AddressAPI.middleware,
    OrderAPI.middleware,
  ],
});

export { store };
