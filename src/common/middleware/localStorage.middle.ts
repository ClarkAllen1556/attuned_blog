import { Middleware } from '@reduxjs/toolkit';

import { TTheme } from '~/common/interfaces/Theme.interface';

export const localStorageMiddleware: Middleware =
  (storeApi) => (next) => (action) => {
    let resultState = next(action);

    if (action.type === 'theme/setTheme') {
      const currentTheme: TTheme = storeApi.getState().theme.currentTheme;

      switch (currentTheme) {
        case 'light':
          document.documentElement.classList.remove('dark');
          break;
        case 'dark':
          document.documentElement.classList.add('dark');
          break;
      }

      localStorage.setItem('UL_THEME', currentTheme);
    }

    return resultState;
  };
