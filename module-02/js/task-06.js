let input;
let total = 0;
const numbers = [];

while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    console.log('Отменено пользователем!');
    break;
  }

  input = Number(input);

  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  numbers.push(input);
  // console.log(numbers);
}

if (numbers.length) {
  for (const number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
}
