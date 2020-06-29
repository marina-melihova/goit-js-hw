import users from './users.js';

const getUsersWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
