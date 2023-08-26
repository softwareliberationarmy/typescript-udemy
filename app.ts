const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number,string]; // tuple
} = {
    name: 'Kerry',
    age: 48,
    hobbies: ['knitting', 'running'],
    role: [17, 'developer']
};

person.role.push('admin');  //warning: still supported
console.log(person.role);

let favoriteActivities: string[];
favoriteActivities = ['working out', 'writing code'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());    
    // console.log(hobby.map()); // !!! ERROR !!!
}