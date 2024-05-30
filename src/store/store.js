import cartReducer from "@/reducers/cart/cartReducer";
import catalogReducer from "@/reducers/catalog/catalogReducer";
import electronicsReducer from "@/reducers/electronics/electronicsReducer";
import jeweleryReducer from "@/reducers/jewelery/jeweleryReducer";
import manClothingReducer from "@/reducers/manClothing/manClothingReducer";
import orderDataReducer from "@/reducers/order/orderDataReducer";
import womanClothingReducer from "@/reducers/womanClothing/womanClothingReducer";
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";

const combinatedReducer = combineReducers({
    catalog: catalogReducer,
    cart: cartReducer,
    jewelery: jeweleryReducer,
    manClothing: manClothingReducer,
    womanClothing: womanClothingReducer,
    electronics: electronicsReducer,
    order: orderDataReducer
})

export const store = configureStore({
    reducer: combinatedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
  })
