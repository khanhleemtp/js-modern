const form = document.querySelector('.quiz-form');
const correctAnswers = ['B', 'A', 'A', 'A'];
const result = document.querySelector('.result');

let score = 0;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value ];

    // check answers 
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // show result on page
    window.scrollTo(0, 0)
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        }
        else {
            output++;
        }
    }, 10)


})

// window object (global object)
// console.log('hello');
// window.console.log('hello');
// window.alert 
// window.document 

// window.setTimeout(() => {
//     alert('hello ld')
// }, 3000)

// let i = 0;
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if(i == 5) {
//         clearInterval(timer);
//     }
// },1000)