import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  query?: string;
}

const initialState: SearchState = {
  query: undefined,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    setCurrentQuery: (state, actions) => {
      state.query = actions.payload;
    },
  },
});

export default searchSlice.reducer;
export const { setCurrentQuery } = searchSlice.actions;
