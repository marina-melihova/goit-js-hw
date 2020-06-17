const ADMIN_PASSWORD = '12345';
let message;
let input = prompt('Введите пароль:');

if (input === null) {
  message = 'Отменено пользователем!';
} else if (input === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else message = 'Доступ запрещен, неверный пароль!';

alert(message);
