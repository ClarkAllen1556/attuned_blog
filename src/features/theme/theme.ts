import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  currentTheme: 'dark' | 'light';
}

const initialState: ThemeState = {
  currentTheme: _osPrefersDarkTheme() ? 'dark' : 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    toggleDarkTheme: (state) => {
      if (state.currentTheme === 'dark') {
        _disableDarkTheme();
        state.currentTheme = 'light';
      } else {
        _enableDarkTheme();
        state.currentTheme = 'dark';
      }

      return state;
    },
  },
});

export const { toggleDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;

function _osPrefersDarkTheme(): boolean {
  return (
    !('UL_THEME' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

function _disableDarkTheme(): void {
  document.documentElement.classList.remove('dark');
}

function _enableDarkTheme(): void {
  document.documentElement.classList.add('dark');
}
