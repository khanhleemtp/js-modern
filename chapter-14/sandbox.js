// store data in local storage (String)

// localStorage.setItem('name', 'ld');
// localStorage.setItem('age', '22');
// localStorage.clear();

// -------------------------------------------

// get data in local storage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');
// console.log(name, age);

// -------------------------------------------
// updating data 

// localStorage.setItem('name', 'mario');
// localStorage.age = 15;

// age = localStorage.getItem('age');

// name = localStorage.getItem('name');
// console.log(name, age)

// -------------------------------------------

// deleting data from local storage
// localStorage.removeItem('name');

// remove all
// localStorage.clear();
// console.log(name, age)


// -------------------------------------------
// Stringifying & Parsing Data

const todos = [
    { "text": "Listening game", "author": "LD" },
    { "text": "Listening music", "author": "K" },
    { "text": "Listening soccer", "author": "G" }
]

// console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));

// -------------------------------------------

