import { useAppDispatch, useAppSelector } from '~/common/hooks';
import { setTheme } from '~/features/theme/theme';
import moonIcon from '@assets/img/moon_icon.svg';
import sunIcon from '@assets/img/sun_icon.svg';
import { useEffect } from 'react';

function ThemeSwitch() {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.UL_THEME === 'dark' || theme.osPrefersDarkTheme) {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
  }, []);

  function toggleTheme() {
    if (theme.currentTheme === 'dark') {
      dispatch(setTheme('light'));
    } else {
      dispatch(setTheme('dark'));
    }
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
