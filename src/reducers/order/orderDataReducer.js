import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    order: {
    name: '',
    email: '',
    phone: '',
    deliveryType: '',
    deliveryAddres: '',
    paymentType: ''},
    status: 'idle',
    error: null
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
    }
})

const { actions, reducer } = orderDataSlice
export const { SET_ORDER_NAME, SET_ORDER_EMAIL, SET_ORDER_PHONE, SET_ORDER_DELIVERY_TYPE, SET_ORDER_DELIVERY_ADDRES, SET_ORDER_PAYMENT_TYPE } = actions
export const OrederDataReducer = state => state.order

export default orderDataSlice.reducer