import { createSlice } from '@reduxjs/toolkit';

type Theme = 'dark' | 'light'

interface ThemeState {
  currentTheme: Theme
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
    toggleDarkTheme: (state) => {
      if (state.currentTheme === 'dark') {
        _disableDarkTheme(state);
      } else {
        _enableDarkTheme(state);
      }

      _saveThemeToLocalStorage(state);

      return state;
    },
    enableDarkTheme: (state) => _enableDarkTheme(state),
    disableDarkTheme: (state) => _disableDarkTheme(state),
  },
});

export const { toggleDarkTheme, enableDarkTheme, disableDarkTheme } =
  themeSlice.actions;
export default themeSlice.reducer;

function _osPrefersDarkTheme(): boolean {
  return (
    !('UL_THEME' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

function _disableDarkTheme(state: ThemeState): ThemeState {
  document.documentElement.classList.remove('dark');
  state.currentTheme = 'light';

  return state;
}

function _enableDarkTheme(state: ThemeState): ThemeState {
  document.documentElement.classList.add('dark');
  state.currentTheme = 'dark';

  return state;
}

function _saveThemeToLocalStorage(state: ThemeState) {
  localStorage.setItem('UL_THEME', state.currentTheme);
}
