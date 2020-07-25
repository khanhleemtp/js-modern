// functions thuộc object

// function declaration

// function greet(){
//     console.log('hello there')
// }

//function expresstion

// const speak = function(){
//     console.log('Good day <3');
// };

// greet();
// greet();
// greet();

// speak();
// speak();

// hoisting: 
// Thuật ngữ mô tả 1 cách lỏng lẻo các function được nâng lên 1 cách hiệu quả
// ở đầu tệp trước phần còn lại của chúng tôi
// gọi trước rồi định nghĩa sau => function expression khẵc phục 


// function greet(){
//     console.log('hello there')
// }




// arguments & parameters

// const speak = function(name='mario', time='morning'){
//     console.log(`good ${time} ${name}`);
// };


// speak('ld', 'night');
// speak();

// returnng values

// const calcArea = function(radius){
//     // let area = 3.14 * radius **2;
//     // return area; lưu trong biến cục bộ
//     return 3.14 * radius **2;
//     // not lưu
// };
// lưu giá trị trả về vào vùng nhớ vs biến là global

// arrow function

// const calcArea = radius => 3.14 * radius**2;


// const area = calcArea(5);

// console.log('area is: ', area);

// const calcVol = function(area){

// }

// const greet = () => 'Hello World';
// const x = greet();
// console.log(x)

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i< products.length; i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// }

// const products = [100,20,30,40];
// const tax = 0.1;
// console.log(bill(products, tax));


// const name = 'ldkhanh';

// functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// method is function đc liên kết vs object hoặc kiểu dữ liệu 




// callbacks & foreach

// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// }

// myFunc(value => {
//     //do something
//     console.log(value);
// })

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`)
// }

// people.forEach((person, i ) => {
//     console.log('Person name: ', i, person )
// });

// people.forEach(logPerson)



// get a reference to the ul

const ul = document.querySelector('.people');

let html = ``;

people.forEach((person, i ) => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

// đặt html trong ul
    
ul.innerHTML = html;