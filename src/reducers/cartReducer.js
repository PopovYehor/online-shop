import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
    previous:[],
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
        SET_PREVIOUS_CART:(state, param)=>{
            const { payload } = param
            state.previous = payload
        }
    }
})

const { actions, reducer } = cartSlice
export const { SET_CURRENT_CART, SET_PREVIOUS_CART } = actions
export const CartReducer = state => state.cart

export default cartSlice.reducer