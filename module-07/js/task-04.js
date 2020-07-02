const valueRef = document.querySelector('#value');

let counterValue = Number(valueRef.textContent);

const increment = value => {
  value += 1;
  return value;
};

const decrement = value => {
  value -= 1;
  return value;
};

const increaseBtn = document.querySelector('button[data-action="increment"]');
const decreaseBtn = document.querySelector('button[data-action="decrement"]');

increaseBtn.addEventListener('click', onIncreaseBtnClick);
decreaseBtn.addEventListener('click', onDecreaseBtnClick);

function onIncreaseBtnClick() {
  counterValue = increment(counterValue);
  updateValue(counterValue);
}

function onDecreaseBtnClick() {
  counterValue = decrement(counterValue);
  updateValue(counterValue);
}

function updateValue(value) {
  valueRef.textContent = value;
}
