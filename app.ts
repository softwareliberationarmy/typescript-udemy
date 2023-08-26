const person = {
    name: 'Kerry',
    age: 48,
    hobbies: ['knitting', 'running']
};

let favoriteActivities: string[];
favoriteActivities = ['working out', 'writing code'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());    
    // console.log(hobby.map()); // !!! ERROR !!!
}