let credits = 23580;
let pricePerDroid = 3000;
let input = prompt('Введите количество дроидов для вашего заказа');
if (input !== null) {
  let order = Number(input);
  const isString = Number.isNaN(order);
  if (isString) {
    alert('Ошибочный ввод данных - не число');
  } else if (order < 1) {
    alert('Количество товара должно быть больше нуля');
  } else {
    let totalPrice = pricePerDroid * order;
    if (totalPrice > credits) {
      alert('Недостаточно средств на счету!');
    } else {
      alert(`Вы купили ${order} штук дроидов, на счету осталось ${credits - totalPrice} кредитов`);
    }
  }
} else alert('Отменено пользователем!');
