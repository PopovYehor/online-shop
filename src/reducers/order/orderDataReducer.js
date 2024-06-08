import { emptyOrder } from "@/constants/order"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    order: emptyOrder,
    status: 'idle',
    error: null,
}

const orderDataSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers:{
        SET_ORDER_NAME:(state, param)=>{
            const {payload} = param
            state.order.name = payload
        },
        SET_ORDER_EMAIL:(state, param)=>{
            const {payload} = param
            state.order.email = payload
        },
        SET_ORDER_PHONE:(state, param)=>{
            const {payload} = param
            state.order.phone = payload
        },
        SET_ORDER_DELIVERY_TYPE:(state, param)=>{
            const {payload} = param
            state.order.deliveryType = payload
        },
        SET_ORDER_DELIVERY_ADDRES:(state, param)=>{
            const {payload} = param
            state.order.deliveryAddres = payload
        },
        SET_ORDER_PAYMENT_TYPE:(state, param)=>{
            const {payload} = param
            state.order.paymentType = payload
        },
        SET_OREDER_CART:(state, param)=>{
            const {payload} = param
            state.order.cart = payload
        },
        SET_ORDER_CREATEAT:(state, param)=>{
            const {payload} = param
            state.order.createAt = payload
        },
        SET_CURRENT_ORDER: (state, param)=>{
            const {payload} = param
            state.order = payload
        },
        SET_CURRENT_ORDER_STATUS: (state, param)=>{
            const {payload} = param
            state.status = payload
        },
        SET_CURRENT_ORDER_ERROR: (state, param)=>{
            const {payload} = param
            state.error = payload
        }
    }
})

const { actions, reducer } = orderDataSlice
export const { SET_ORDER_NAME,
    SET_ORDER_EMAIL,
    SET_ORDER_PHONE,
    SET_ORDER_DELIVERY_TYPE,
    SET_ORDER_DELIVERY_ADDRES,
    SET_ORDER_PAYMENT_TYPE,
    SET_OREDER_CART,
    SET_ORDER_CREATEAT,
    SET_CURRENT_ORDER,
    SET_CURRENT_ORDER_STATUS,
    SET_CURRENT_ORDER_ERROR } = actions
export const OrederDataReducer = state => state.order

export default orderDataSlice.reducer