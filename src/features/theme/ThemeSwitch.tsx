import { useAppDispatch, useAppSelector } from '~/hooks';
import { toggleDarkTheme } from './theme';
import moonIcon from '@assets/img/moon_icon.svg';
import sunIcon from '@assets/img/sun_icon.svg';

function ThemeSwitch() {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

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
