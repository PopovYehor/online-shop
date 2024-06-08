import { emptyProductItem } from "@/constants/product"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    manClothing: emptyProductItem,
    status: 'idle',
    error: null
}

const manClothingSlice = createSlice({
    name: 'manClothing',
    initialState: initialState,
    reducers:{
        SET_CURRENT_MAN_CLOTHING:(state, param)=>{
            const { payload } = param
            state.manClothing.data = payload
        }
    }
})

const { actions, reducer } = manClothingSlice
export const { SET_CURRENT_MAN_CLOTHING } = actions
export const ManClothingReducer = state => state.manClothing

export default manClothingSlice.reducer