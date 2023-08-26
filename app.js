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
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Kerry',
    age: 48,
    hobbies: ['knitting', 'running'],
    role: Role.AUTHOR
};
var favoriteActivities;
favoriteActivities = ['working out', 'writing code'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
if (person.role == Role.ADMIN) {
    console.log('is admin');
}
else if (person.role == Role.AUTHOR) {
    console.log('is author');
}
