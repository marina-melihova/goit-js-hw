import { default as users } from './users.js';

// console.table(users);

const calculateTotalBalance = users =>
  users.reduce((sum, user) => sum + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
