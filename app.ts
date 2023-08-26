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

enum Role { ADMIN = 5, READ_ONLY = 'FRED', AUTHOR = 200 };

const person = {
    name: 'Kerry',
    age: 48,
    hobbies: ['knitting', 'running'],
    role: Role.AUTHOR
};

let favoriteActivities: string[];
favoriteActivities = ['working out', 'writing code'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());    
    // console.log(hobby.map()); // !!! ERROR !!!
}

if(person.role == Role.ADMIN){
    console.log('is admin');
}
else if(person.role == Role.AUTHOR){
    console.log('is author');
}