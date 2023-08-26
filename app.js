var person = {
    name: 'Kerry',
    age: 48,
    hobbies: ['knitting', 'running'],
    role: [17, 'developer']
};
person.role.push('admin'); //warning: still supported
console.log(person.role);
var favoriteActivities;
favoriteActivities = ['working out', 'writing code'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
