import refs from '../refs.js';
import menu from '../../menu.json';
import itemsMenu from '../../templates/menu-items.hbs';

const createMenuListMarkup = () => {
  const markup = itemsMenu(menu);
  refs.menuList.innerHTML = markup;
};

export { createMenuListMarkup };
