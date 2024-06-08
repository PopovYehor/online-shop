import { API_URL } from "@/constants/api"
import { emptyProductItem } from "@/constants/product"
import { axios } from "@/services/axiosServices"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    catalog: emptyProductItem,
    selectProduct: emptyProductItem,
    status: 'idle',
    error: null
}

export const fetchCatalog = createAsyncThunk('products', async (catalog, thunkApi)=>{
    try{
        const response = await axios.get(API_URL)
        if (response.status >= 400){
            return thunkApi.rejectWithValue(response.data.message)
        }
        return response
    }catch(error){
        return thunkApi.rejectWithValue(error)
    }
})

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: initialState,
    reducers:{
        SET_CURRENT_CATALOG:(state, param)=>{
            const { payload } = param
            state.catalog.data =  payload
        },
        SET_SELECTED_PRODUCT:(state, param)=>{
            const {payload} = param
            state.selectProduct = payload
        },
    },
    extraReducers(builder){
        builder
        .addCase(fetchCatalog.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchCatalog.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.catalog = action.payload;
          })
          .addCase(fetchCatalog.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
          })
    }
})
const { actions, reducer } = catalogSlice
export const { SET_CURRENT_CATALOG, SET_SELECTED_PRODUCT } = actions
export const CatalogReducer = state => state.catalog

export default catalogSlice.reducer