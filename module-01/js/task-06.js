let input;
let total = 0;

while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    console.log('Отменено пользователем!');
    break;
  }

  input = Number(input);

  const isString = Number.isNaN(input);

  if (isString) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  total += input;
}

alert(`Общая сумма чисел равна ${total}`);
