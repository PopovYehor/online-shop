import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
    status: 'idle',
    error: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers:{
        SET_CURRENT_CART:(state, param)=>{
            const { payload } = param
            state.cart = [...state.cart, payload]
        },
        SET_CHANGE_CART:(state, param)=>{
            const { payload } = param
            state.cart = payload
        },
        SET_CURRENT_COUNT:(state, param)=>{
            const {payload} = param
            state.cart[payload.index].count = payload.count
        },
        SET_CURRENT_PRICE:(state, param)=>{
            const {payload} = param
            state.cart[payload.index].summPrice = Number(payload.price.toFixed(2))

        }
    }
})

const { actions, reducer } = cartSlice
export const { SET_CURRENT_CART, SET_CHANGE_CART, SET_CURRENT_COUNT, SET_CURRENT_PRICE } = actions
export const CartReducer = state => state.cart

export default cartSlice.reducer