const inputRef = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const containerRef = document.querySelector('#boxes');

createBtn.addEventListener('click', () => createBoxes(Number(inputRef.value)));
destroyBtn.addEventListener('click', desrtoyBoxes);
destroyBtn.addEventListener('click', resetInput);

function createBoxes(amount) {
  if (containerRef.children.length) desrtoyBoxes(); // либо можно добавлять к предыдущим коллекциям
  let side = 30;
  const boxes = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = side + 'px';
    div.style.height = side + 'px';
    div.style.border = '1px solid grey';
    div.style.backgroundColor = randomColor();
    boxes.appendChild(div);
    side += 10;
  }
  containerRef.appendChild(boxes);
}

function desrtoyBoxes() {
  const arrBoxes = containerRef.querySelectorAll('div');
  arrBoxes.forEach(box => box.remove());
}

function randomColor() {
  const r = Math.floor(256 * Math.random());
  const g = Math.floor(256 * Math.random());
  const b = Math.floor(256 * Math.random());
  return `rgb(${r},${g},${b})`;
}

function resetInput() {
  inputRef.value = 0;
}

/*------------ другой способ - генерим сразу разметку ------------*/

// function createBoxes(amount) {
//   if (containerRef.children.length) desrtoyBoxes();
//   let markup = '';
//   let side = 30;
//   for (let i = 1; i <= amount; i += 1) {
//     markup += `<div id="box${i}" class="square" style="width: ${side}px; height: ${side}px; border: 1px solid grey; background-color: ${randomColor()}"></div>`;
//     side += 10;
//   }
//   containerRef.innerHTML = markup;
// }

// function desrtoyBoxes() {
//   const div = document.querySelector('#box1');
//   containerRef.innerHTML = '';
//   console.log(div); // наши дивы продолжают где-то болтаться
// }
