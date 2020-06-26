import { default as users } from './users.js';

// console.table(users);

const getNamesSortedByFriendsCount = users =>
  [...users]
    .sort((prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length)
    .map(user => user.name);

// вначале при помощи операции распыления сделали копию
// исходного массива пользователей, чтобы не мутировать его

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
