export type Theme = 'dark' | 'light';

export interface ThemeState {
  currentTheme: Theme;
  osPrefersDarkTheme: boolean;
}
