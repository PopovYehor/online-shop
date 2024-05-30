import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    electronics: {data: [{title:0, id: 0}]},
    status: 'idle',
    error: null
}

const electronicsSlice = createSlice({
    name: 'electronics',
    initialState: initialState,
    reducers:{
        SET_CURRENT_ELECTRONICS:(state, param)=>{
            const { payload } = param
            state.electronics.data = payload
            state.status = 'update'
        }
    }
})

const { actions, reducer } = electronicsSlice
export const { SET_CURRENT_ELECTRONICS } = actions
export const ElectronicsReducer = state => state.electronics

export default electronicsSlice.reducer