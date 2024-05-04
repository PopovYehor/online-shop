import { API_URL } from "@/constants/api"
import { axios } from "@/services/axiosServices"
import { store } from "@/store/store"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    catalog: [],
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
    initialState,
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

export const CatalogReducer = state => state.catalog

export default catalogSlice.reducer