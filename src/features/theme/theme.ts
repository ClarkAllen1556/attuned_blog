import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = 'dark' | 'light';

interface ThemeState {
  currentTheme: Theme;
  osPrefersDarkTheme: boolean;
}

const initialState: ThemeState = {
  currentTheme: _osPrefersDarkTheme() ? 'dark' : 'light',
  osPrefersDarkTheme: _osPrefersDarkTheme(),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

function _osPrefersDarkTheme(): boolean {
  return (
    !('UL_THEME' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}
