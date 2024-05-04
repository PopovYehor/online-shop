import catalogReducer from "@/reducers/catalogReducer";
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";

const combinatedReducer = combineReducers({
    catalog: catalogReducer,
})

export const store = configureStore({
    reducer: combinatedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
  })
