const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`В списке ${items.length} категории:`);
console.dir(items);
items.forEach(node => {
  const h2 = node.querySelector('h2');
  const nodeItems = node.querySelectorAll('li');
  console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
});
