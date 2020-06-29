import users from './users.js';

const getSortedUniqueSkills = users =>
  users
    .reduce((acc, { skills }) => acc.concat(skills), [])
    .filter((skill, index, skills) => index === skills.indexOf(skill))
    .sort();

//======================= другие способы ==============================

/*--- clean reduce + др. способ сравнения эл-тов массива ПОСЛЕ сортировки ---*/
// const getSortedUniqueSkills = users =>
//   users
//     .reduce((acc, user) => [...acc, ...user.skills], [])
//     .sort()
//     .filter((skill, index, array) => skill !== array[index - 1]);

/*---------- dirty reduce + new Set ----------*/
// const getSortedUniqueSkills = users => {
//   const skillsAll = users.reduce((acc, user) => {
//     acc.push(...user.skills);
//     return acc;
//   }, []);
//   const set = new Set(skillsAll); // показал Андрей на занятии
//   const result = [...set];
//   return result.sort();
// };

/*----- как под капотом в 1-м способе работает filter -----*/
// const getSortedUniqueSkills = users => {
//   const skillsAll = users.reduce((acc, user) => acc.concat(user.skills), []);
//   const result = [];
//   for (let i = 0; i < skillsAll.length; i += 1) {
//     const skill = skillsAll[i];
//     const index = skillsAll.indexOf(skill);
//     if (index === i) {
//       result.push(skillsAll[index]);
//     }
//   }
//   return result.sort();
// };

console.log(getSortedUniqueSkills(users)); // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
