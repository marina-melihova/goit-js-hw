import users from './users.js';

const getNamesSortedByFriendsCount = users =>
  // вначале при помощи операции распыления сделали копию
  // исходного массива пользователей, чтобы не мутировать его
  [...users]
    // и затем делаем деструктуризацию
    .sort(({ friends: friends1 }, { friends: friends2 }) => friends1.length - friends2.length)
    .map(({ name }) => name);

console.log(getNamesSortedByFriendsCount(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
