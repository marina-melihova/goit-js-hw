import { default as users } from './users.js';

// console.table(users);

// Чистая версия, каждый раз создает новый массив

const getSortedUniqueSkills = users =>
  users
    .reduce((acc, user) => [...acc, ...user.skills], [])
    .sort()
    .filter((skill, index, array) => skill !== array[index - 1]);

//======================= другие способы ==============================

// dirty reduce + new Set
/* 
const getSortedUniqueSkills = users => {
  const skillsAll = users.reduce((acc, user) => {
    acc.push(...user.skills);
    return acc;
  }, []);
  const set = new Set(skillsAll); // показал сегодня Андрей на занятии
  const result = [...set];
  return result.sort();
};

 */

// Андрей предложил ещё сделать через indexOf
// (при помощи него реализован new Set)
/* 
const getSortedUniqueSkills = users => {
  const skillsAll = users.reduce((acc, user) => [...acc, ...user.skills], []);
  const indexes = [];
  for (const skill of skillsAll) {
    const index = skillsAll.indexOf(skill);
    if (indexes.includes(index)) {
      continue;
    }
    indexes.push(index);
  }
  const result = [];
  for (const index of indexes) {
    result.push(skillsAll[index]);
  }
  return result.sort();
};
 */

console.log(getSortedUniqueSkills(users)); // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
