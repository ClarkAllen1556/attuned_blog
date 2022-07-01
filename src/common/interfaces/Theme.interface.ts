export type TTheme = 'dark' | 'light';

export interface IThemeState {
  currentTheme: TTheme;
  osPrefersDarkTheme: boolean;
}
