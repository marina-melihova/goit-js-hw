import { default as users } from './users.js';

// console.table(users);

const getUsersWithFriend = (users, friendName) => {
  const result = [];
  users
    .filter(user => {
      for (const friend of user.friends) {
        if (friend !== friendName) {
          continue;
        }
        return user.name;
      }
    })
    .forEach(user => {
      result.push(user.name);
    });
  return result;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
