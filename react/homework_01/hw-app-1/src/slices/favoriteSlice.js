import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      state.items = action.payload;
    },
    addToFavorite: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { setFavorite, addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;