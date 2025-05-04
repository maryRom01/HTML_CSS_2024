import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const MAIN_URL = 'https://fakestoreapi.com/products/';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async(thunkAPI) => {
        try {
            const localData = localStorage.getItem("products");
            if (localData) {
                return JSON.parse(localData);
            }
            const { data } = await axios.get(MAIN_URL);
            localStorage.setItem("products", JSON.stringify(data));
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
      items: [],
      status: 'idle',
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    }
  });
  
  export default productsSlice.reducer;