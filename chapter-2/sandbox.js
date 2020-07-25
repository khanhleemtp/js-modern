// variables
// let myAge = 25;
// let year = 2020;

// console.log(myAge, year);

// age = 30;
// console.log(age);

// const points = 100;

// console.log(points);

// var score = 75;
// console.log(score);
// score = 80
// JS Data types
//  Number, string, boolean, 
// null: set a variable with no value
//  undefined: variable that have not yet been defined
// object: complex-data structures - Arrays, Dates, Literals
// symbol used with object


// // strings
// console.log('hello, world');
// let email = 'ldkhanh@gmail.com';
// console.log(email);

// // string concatenation
// let firstName = 'LD';
// let lastName = 'Khánh';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // getting characters
// console.log(fullName[3]);
// // string length
// console.log(fullName.length);

// // string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLocaleLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// // common string methods
// // let email = 'ldkhanh@gmail.com'
// let resultH = email.lastIndexOf('h');
// console.log(resultH);

// let resultS = email.slice(2,7)
// // từ vị trí thứ 2 cắt đến vị trí 7 k lấy 7
// console.log(resultS)

// let resultSub = email.substr(2,5)
// // từ vị trí thứ 2 cắt đến 2+5= 7 kí tự
// console.log(resultSub)

// // let resultReplace = email.replace('k', 't')
// let resultReplace = email.replace('h', 't')
// // chỉ thay thế kí tự đầu tiên tìm thấy
// console.log(resultReplace);


// ================================Number=====================================
// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi)

// Math operators +, -, *, /, **. %
// console.log(10 / 2);
// let result = radius % 3;
//let result = pi * radius**2;

// orders of operation - B I D M A S

// let result = 5 * (10-3)**2;

// console.log(result);

// let likes = 10;
// likes = likes + 1;
// likes++;
// likes--;
// likes += 10;
// likes -=5 ;
// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5/ 'hello');
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

// ================================================================

// template strings

// const title = 'Best of read 2020';
// const author = 'LD';
// const likes = 30;

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';

// template string
// let result = `The blog called ${title} by ${author} has ${likes} likes`;

// console.log(result);

// creating html templates

// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;

// console.log(html);



// ================================Array======================================
// let ninjas = ['shaun', 'ryu', 'chunli'];

// ninjas[1] = 'ld'
// console.log(ninjas[1]);

// let ages = [20, 25,30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// array method 

// let result = ninjas.join('-');
// Kết hợp các phần tử thành chuỗi ngăn nhau bởi ;

// let result = ninjas.indexOf('chunli');
// vị trí trong mảng

// let result = ninjas.concat(['ken','crystal', 'ld'])
// nối mảng với mảng khác

// let result = ninjas.push('ld')
// trả về độ dài mảng và thay đổi mảng

// result = ninjas.pop();
// loại bỏ phần tử cuối, trả về tên phần tử bị loại bỏ
// console.log(result, ninjas)

// ==============================Null, undefined=======================================
// let age;
// console.log(age, age + 3, `the age is ${age}`);
// undefined NaN "the age is undefined"

// null gán giá trị k có nghĩa là gì
// undefined : biến k đc gán giá trị

// ================================Boolean=====================================

// booleans & comparisons
// console.log(true, false, 'true', 'false');


// methods can return booleans
// let email = 'ldkhanh@gmai.com';
// let name = ['mario', 'lugi', 'toad']

// let result = email.includes('!');
// let resulA = name.includes('mario');
// // ktra có hay k trong mảng
// console.log(result, resulA)

// comparison operators

// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age >= 25);
// console.log(age <= 25);

// let name = 'shaun';

// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// // khác nhau    
// console.log(name > 'crystal');
// // chữ cái đầu tiên là s > c
// console.log(name > 'Shaun');
// // chữ thường > chữ hoa
// console.log(name > 'Crystal');


// ====================================================
// let age = 25;
// loose comparison (different types can stills be equal)

// console.log(age == 25 );
// console.log(age == '25');

// console.log(age != 25 );
// console.log(age != '25');

// strict comparison (different types cannot stills be equal)

// console.log(age === 25 );
// console.log(age === '25');

// console.log(age !== 25 );
// console.log(age !== '25');

// ==============================================================

// type conversion
// let score = '100';

// score = Number(score);

// console.log(score + 1);

// console.log(typeof(score))

// let result = Number('hello');

// let result = String(50);

// let result = Boolean(50);
// let result = Boolean('ld');
// console.log(result, typeof result); 
// NAN

