// --------------------Filter-------------------------
// const scores = [10, 30, 15, 25, 50, 40, 5];

// //filter method

// const filterScores = scores.filter((score, index) => {
//     return score> 20;
// });

// console.log(filterScores);

// const users = [
//     { name: 'shaun', premium: true },
//     { name: 'yoshi', premium: false },
//     { name: 'mario', premium: false },
//     { name: 'chun-li', premium: true },

// ];

// const filterUsers = users.filter(user => user.premium)

// console.log(filterUsers);

// ----------------------------Map--------------------

// const price = [10, 20, 30,5, 15, 100];

// const salePrices = price.map((price) => {
//     return price / 2;
// });

// console.log(salePrices);

// const products = [
//     { name: 'shaun', price: 20 },
//     { name: 'yoshi', price: 30 },
//     { name: 'mario', price: 50 },
//     { name: 'chun-li', price: 60 },
// ];

// const saleProducts = products.map((product) => {
//     if(product.price > 30) {
//         // product.price = product.price/2;
//         // return product;
//         return { name: product.name, price: product.price/2 }
//     } else {
//         return product;
//     }
// })

// console.log(saleProducts);

// --------------------------Reduce ------------------

// const scores = [10, 30, 15, 25, 50, 40, 5];

// const result = scores.reduce((acc, curr) => {
//     if(curr > 30) {
//         acc++;
//     }
//     return acc;
// }, 10);
// console.log(result);

// const scores = [
//     { player: 'mario', score: 50},
//     { player: 'yoshi', score: 30},
//     { player: 'mario', score: 80},
//     { player: 'crystal', score: 40},
// ];

// const marioTotal = scores.reduce((acc, curr) => {
//     if(curr.player === 'mario') {
//         acc += curr.score;
//     }
//     return acc;
// }, 0);

// console.log(marioTotal);

// ----------------Find ---------------------------
// const scores = [10, 30, 15, 25, 50, 40, 5];

// const firstHighScore = scores.find(score => score > 30);
// console.log(firstHighScore);
// 50

// ----------------- Sort -----------------------------

// ex1: sorting strings
// const names = ['mario', 'yoshi', 'chunli', 'yoshi', 'luigi'];

// names.sort();
// names.reverse();
// console.log(names);

// // ex2: sorting numbers
// const scores = [10, 30, 15, 25, 50, 40, 5];
// scores.sort((a, b) => b - a);
// scores.reverse();
// console.log(scores);

// // ex3: sorting objects
// const players = [
//     { name: 'mario', score: 50},
//     { name: 'yoshi', score: 30},
//     { name: 'chun-li', score: 80},
//     { name: 'crystal', score: 40},
// ];

// players.sort((a, b) => {
//     if(a.score > b.score) {
//         return -1;
//     } else if (b.score > a.score) {
//         return 1;
//     }
//     return 0;
// });

// players.sort((a, b) => b.score -a.score);

// console.log(players);

// ------------------Chaining------------------

const products = [
    { name: 'shaun', price: 20 },
    { name: 'yoshi', price: 30 },
    { name: 'mario', price: 50 },
    { name: 'chun-li', price: 60 },
];

// const filtered = products.filter(product => product.price > 30);

// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`
// })

const promos = products.filter(product => product.price > 30)
                        .map(product => `the ${product.name} is ${product.price / 2} pounds`)

console.log(promos);