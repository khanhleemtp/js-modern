// Control flow
// Use loops for cycling through data

// ============================LOOP=======================================

// for loop

// for(let i = 0; i < 5; i++) {
//     console.log('in loop', i)
// }

// console.log('loop finished')

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//   //   console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// } 


// while loop
// let i = 0;

// while(i < 5){
//     console.log('in loop: ', i)
//     i++;
// }

// const names = ['shaun', 'mario', 'luigi'];

// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// do while loop
// chạy ít nhất 1 lần cả khi đk not true

// let j = 4;

// do{
//     console.log('val of i is', j)
//     j++
// } while(j < 5)

//=========================If Statements=============================================
// const age = 25;
// if(age > 20) {
//     console.log('You are over 20 years ago')
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 3){
//     console.log("That 's a lot of ninjas")
// }

// Logical operators OR ||, AND &&

// const password = '123@';

// if(password.length >= 12 && password.includes('@')){
//     console.log('That password is might strong')
// } else if(password.length >= 8 || password.includes('@') && password.length > 5){
//     console.log('This password is long enough!');
// } else {
//     console.log('password is not long enough');
// }


// Logical NOT (!)

// let user = false;


// if(!user) {
//     console.log('You must logged in to continue ')
// }

// console.log(!true);
// console.log(!false)

// break and continue

// const scores = [50, 25, 0, 60, 75, 15, 100];

// for(let i = 0; i < scores.length; i++){
//     if(scores[i] === 0) {
//         continue;
//     }

//     // bỏ qua 0 vì quá xấu hổ :v continue
//     console.log('Your score : ', scores[i]);
//     if(scores[i] === 100) {
//         console.log('congrats, you got the top score');
//         break;
//         // dừng vòng lặp
//     }
// }

// switch cases  statements

// const grade = '50';
// // switch dk chặt 
// switch(grade) {
//     case '50':
//         console.log('You got an A');
//         break;
//     case 'B':   
//         console.log('You got an B');
//         break;
//     case 'C':   
//         console.log('You got an C');
//         break;
//     case 'D':   
//         console.log('You got an D');
//         break;
//     case 'E':
//         console.log('You got an E');
//         break;    
//     default: 
//         console.log('Not a valid grade')        
// }

// using if statements
// if(grade === 'A') {

// } else if(grade === 'B'){

// } else if(grade === 'C'){
    
// } else if(grade === 'D'){
    
// } else if(grade === 'E'){
    
// } else if(grade === 'F'){
    
// } else{

// }


// variables & block scope

const age = 30;
// truy cập mọi nơi, global 
if(true){
    const age = 40;
    const name = 'ld'
    console.log('inside 1st code block', age, name);
    
    if(true){
        const age = 50;
        console.log('inside 2nd code block: ', age)
        var test = 'hello'
    }
}

console.log('outside code block', age, name, test);