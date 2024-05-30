import cartReducer from "@/reducers/cartReducer";
import catalogReducer from "@/reducers/catalogReducer";
import electronicsReducer from "@/reducers/electronicsReducer";
import jeweleryReducer from "@/reducers/jeweleryReducer";
import manClothingReducer from "@/reducers/manClothingReducer";
import orderDataReducer from "@/reducers/orderDataReducer";
import womanClothingReducer from "@/reducers/womanClothingReducer";
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
