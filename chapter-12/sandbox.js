// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(() => {
//     console.log('callback function fired')
// }, 2000)
// console.log(4);
// console.log(5);

// ---------------Make HTTP request---------------------

// const getTodos = (resource, callback) => {
    
//     return new Promise((resolve, reject) => {
//             const request = new XMLHttpRequest();

//             request.addEventListener('readystatechange', () => {
//                 // console.log(request, request.readyState)
//                 if(request.readyState === 4 && request.status === 200) {
//                     // 0: UN_SENT Client has been created. open() not called yet
//                     // 1: OPENED open() has been called.
//                     // 2: HEADER_RECEIVED send() has been called, and headers and status are available.
//                     // 3: LOADING Downloading; responseText holds partial data
//                     // 4: DONE The operation is complete.
//                     // console.log(request.responseText);

//                     const data = JSON.parse(request.responseText);

//                     // callback(undefined, data);

//                     resolve(data);

//                 } else if( request.readyState === 4) {
//                     // console.log('cound not fetch data');
//                     // callback('Cound not fetch data', undefined)
               
//                     reject('Cound not fetch data');
//                 }
//             });
//             // https://jsonplaceholder.typicode.com/todos/
//             request.open('GET', resource);
//             request.send();
//     })
// };

// --------------------------------------------
// console.log(1)
// console.log(2)
// console.log(3)
// -----------------------------------------------
// call back hell 

// getTodos('todos/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/shaun.json', (err, data) => {
//             console.log(data);
//         })
//     })
// });

// -------------------------------------------
// console.log(4)
// console.log(5)

// async code : start now and finish later


// --------------------JSON-------------------
// const data = JSON.parse(request.responseText);

// ---------------Promise ex-----------------

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetch something
//         // resolve('some data');

//           some err
//         reject('some error')
//     });
// }

// getSomething().then(data => console.log(data), (err) => {
//     console.log(err);
// })

// getSomething().then(data => console.log(data))
//              .catch(err => console.log(err));

// -----------------------------------------------
// getTodos('todos/luigi.json')
//     .then(data => {
//         console.log('Promise 1 resolved: ',data);
//         return getTodos('todos/mario.json')})
//     .then(data => {
//         console.log('Promise 2 resolved: ',data)
//         return getTodos('todos/shaun.json')})
//     .then(data => console.log('Promise 3 resolved: ',data))
//     .catch(err => console.log(err));

// ---------------------------------------------

// Fetch api

// fetch('todos/luigi.json')
//         .then((response) => {
//             console.log('resolved: ', response.json());
//             return response.json();
//         })
//         .then(data => console.log(data))
//         .catch((error) => {
//             console.log('reject', error)
//         })
// ----------------------------------------------

// Async Await  

const getTodos = async () => {
    // async _ none_blocking
    // return Promise

    //resolve
    const response = await fetch('todos/luigi.json');
    // return promise 
    
    // throw error
    if(response.status !== 200) {
        throw new Error('Cannot fetch data');
    }

    //resolve
    const data = await response.json();
    // console.log(data);
    return data;
}

// const test = getTodos();
// console.log(test); // promise

console.log(1);
getTodos()
    .then(data => {
        console.log('resolved', data);
    })
    .catch(err => {
        console.log('rejected', err.message)
    })

console.log(2);
console.log(3);
console.log(4);
console.log(5);
