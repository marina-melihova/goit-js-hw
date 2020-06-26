import { default as users } from './users.js';

// console.table(users);

const getSortedUniqueSkills = users =>
  users
    .reduce((acc, user) => [...acc, ...user.skills], [])
    .sort()
    .filter((skill, index, array) => skill !== array[index - 1]);

console.log(getSortedUniqueSkills(users)); // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
