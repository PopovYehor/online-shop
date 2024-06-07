import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    mobile: false,
}

const mobileSlice = createSlice({
    name: 'mobile',
    initialState: initialState,
    reducers:{
        SET_MOBILE:(state, param)=>{
            const { payload } = param
            state.mobile =  payload
        }
    }
})

const { actions, reducer } = mobileSlice
export const { SET_MOBILE } = actions
export const mobileReducer = state => state.mobile

export default mobileSlice.reducer