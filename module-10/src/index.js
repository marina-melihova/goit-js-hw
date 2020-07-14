import refs from './js/refs.js';
import { initTheme, onChangeSwitch } from './js/services/themeSwitch';
import { createMenuListMarkup } from './js/components/menuList';
import './css/styles.css';

initTheme();
createMenuListMarkup();

refs.switch.addEventListener('change', onChangeSwitch);
