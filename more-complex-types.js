"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number,string]; // tuple
// } = {
//     name: 'Kerry',
//     age: 48,
//     hobbies: ['knitting', 'running'],
//     role: [17, 'developer']
// };
// person.role.push('admin');  //warning: still supported
// console.log(person.role);
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "FRED";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Kerry',
    age: 48,
    hobbies: ['knitting', 'running'],
    role: Role.AUTHOR
};
let favoriteActivities;
favoriteActivities = ['working out', 'writing code'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
if (person.role == Role.ADMIN) {
    console.log('is admin');
}
else if (person.role == Role.AUTHOR) {
    console.log('is author');
}
//# sourceMappingURL=more-complex-types.js.map