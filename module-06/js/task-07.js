import users from './users.js';

const calculateTotalBalance = users => users.reduce((sum, { balance }) => sum + balance, 0);

console.log(calculateTotalBalance(users)); // 20916
