import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import favoriteReducer from './slices/favoriteSlice';
import modalReducer from './slices/modalSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        favorite: favoriteReducer,
        modal: modalReducer
    },
});

export default store;