// Task 1

let user1 = {
    name: 'Artem',
    age: 20,
    status: null,
    skills: ['c++', 'python', 'binding of isaac'],
    greeting() {
        return `Hello, my name is ${this.name}, I'm gonna break your knees`;
    }
}

function deepCopy(obj) {
    let newObj = {};
    for (const objKey in obj) {
        if (typeof obj[objKey] === "object") {
            if (Array.isArray(obj[objKey])) {
                newObj[objKey] = obj[objKey].map(value => value);
            } else if (obj[objKey] === null) {
                newObj[objKey] = null;
            } else {
                newObj[objKey] = deepCopy(obj[objKey]);
            }
        } else {
            newObj[objKey] = obj[objKey];
        }
    }
    return newObj;
}

user2 = deepCopy(user1);

console.log(user1);
console.log(user2);
console.log(user2?.greeting(), user1 === user2, user1.skills === user2.skills);

// Task 2

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const addId = (value, index) => ({id: index + 1, ...value})
console.log(coursesAndDurationArray.map(addId));