import { useAppDispatch, useAppSelector } from '~/common/hooks';
import {
  toggleDarkTheme,
  enableDarkTheme,
  disableDarkTheme,
} from '~/features/theme/theme';
import moonIcon from '@assets/img/moon_icon.svg';
import sunIcon from '@assets/img/sun_icon.svg';
import { useEffect } from 'react';

function ThemeSwitch() {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.UL_THEME === 'dark' || theme.osPrefersDarkTheme) {
      dispatch(enableDarkTheme());
    } else {
      dispatch(disableDarkTheme());
    }
  }, []);

  function toggleTheme() {
    dispatch(toggleDarkTheme());
  }

  function currentThemeIcon() {
    if (theme.currentTheme === 'dark') {
      return moonIcon;
    }

    return sunIcon;
  }

  return (
    <button onClick={toggleTheme}>
      <img src={currentThemeIcon()} className="w-8 h-8" />
    </button>
  );
}

export default ThemeSwitch;
