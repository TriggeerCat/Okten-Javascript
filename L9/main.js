let tasks = document.getElementsByClassName('task');

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Task 1

let div = document.createElement('div');
// document.body.append(div);
tasks[0].appendChild(div);
div.classList.add('wrap', 'collapse', 'alpha', 'beta');

let divClone = document.createElement('div');
tasks[0].appendChild(divClone);
divClone.classList.add('wrap', 'clone');

// Task 2

let arr = ['Main','Products','About us','Contacts'];
let ul = document.createElement('ul');
tasks[1].appendChild(ul)
for (const arrElement of arr) {
    let li = document.createElement('li');
    li.innerText = arrElement;
    ul.appendChild(li);
}

// Task 3

for (const arrElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerHTML = `<h3>${arrElement.title}</h3><p>${arrElement.monthDuration}</p>`;
    tasks[2].appendChild(div)
}

// Task 4

for (const arrElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item')
    div.innerHTML = `<h1 class='heading'>${arrElement.title}</h1><p class='description'>${arrElement.monthDuration}</p>`;
    tasks[3].appendChild(div)
}