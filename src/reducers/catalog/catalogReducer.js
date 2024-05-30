import { API_URL } from "@/constants/api"
import { axios } from "@/services/axiosServices"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    catalog: {data:[{title: 0, id: 0}]},
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
        }
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
export const { SET_CURRENT_CATALOG } = actions
export const CatalogReducer = state => state.catalog

export default catalogSlice.reducer