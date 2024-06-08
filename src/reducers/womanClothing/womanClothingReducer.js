import { emptyProductItem } from "@/constants/product"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    womanClothing: emptyProductItem,
    status: 'idle',
    error: null
}

const womanClothingSlice = createSlice({
    name: 'womanClothing',
    initialState: initialState,
    reducers:{
        SET_CURRENT_WOMAN_CLOTHING:(state, param)=>{
            const { payload } = param
            state.womanClothing.data = payload
        }
    }
})

const { actions, reducer } = womanClothingSlice
export const { SET_CURRENT_WOMAN_CLOTHING } = actions
export const WomanClothingReducer = state => state.womanClothing

export default womanClothingSlice.reducer