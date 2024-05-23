import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    jewelery: {data:[{title: 0, id: 0}]},
    status: 'idle',
    error: null
}

const jewelerySlice = createSlice({
    name: 'jewelery',
    initialState: initialState,
    reducers:{
        SET_CURRENT_JEWELERY:(state, param)=>{
            const { payload } = param
            state.jewelery.data = payload
            state.status = 'update'
        }
    }
})

const { actions, reducer } = jewelerySlice
export const { SET_CURRENT_JEWELERY } = actions
export const JeweleryReducer = state => state.jewelery

export default jewelerySlice.reducer