// DOM
// Created by the browser
// 'document' object

// const para = document.querySelector('div.error');

// console.log(para)

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');


// paras.forEach(para => {
//     console.log(para)
// })

// console.log(paras[1])



// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get element by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// get element by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);
// k dùng forEach


//

// const para = document.querySelector('p');

// console.log(para.innerText);

// para.innerText = 'LD is handsome';

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// })

// const content = document.querySelector('.content');

// console.log(content.innerHTML)

// content.innerHTML += '<h2>This is a new H2</h2>'

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`; 
// });



// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.facebook.com');
// link.innerText = 'Facebook';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));

// mssg.setAttribute('class', 'success');

// mssg.setAttribute('style', 'color: green');

// const title = document.querySelector('h2');

// title.setAttribute('style', 'color: red; margin: 50px');

// console.log(title.style);
// console.log(title.style.color);
// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '30px';
// title.style.margin = '';


const content = document.querySelector('p');

console.log(content.classList);

content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');

const paras = document.querySelectorAll('h4');

paras.forEach( h => {
    console.log(h.textContent);
    if(h.textContent.includes('error')){
        h.classList.add('error')
    }
    if(h.textContent.includes('success')){
        h.classList.add('success')
    }
})

const title = document.querySelector('.test');

title.classList.toggle('test-1');
title.classList.toggle('test-1');