const total = 100;
let ordered = 80;
if (ordered < 1) {
  alert('Минимальное количество товара для оформления заказа - 1 штука');
} else if (ordered <= total) {
  alert('Заказ оформлен, с вами свяжется менеджер');
} else alert('На складе недостаточно твоаров!');
