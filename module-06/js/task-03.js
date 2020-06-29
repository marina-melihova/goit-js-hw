import users from './users.js';

const getUsersWithGender = (users, search) =>
  users.filter(({ gender }) => gender === search).map(({ name }) => name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
