const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const list = document.querySelector('#ingredients');
const listItems = ingredients.reduce((acc, item) => {
  const li = document.createElement('li');
  li.textContent = item;
  acc.push(li);
  return acc;
}, []);
list.append(...listItems);
