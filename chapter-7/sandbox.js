const form = document.querySelector('.signup-form');
// const input = document.querySelector('#username')
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/

// regular expression
// ^:start $: end {}: range 
// []: allow character .: all, [a-z], [A-Z]
// ex: ^.{6,10}$ kkkkkkk: match, kkk: not match


form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(input.value);
    console.log(form.username.value)  
    
    // validation
    const value = form.username.value;
    if(usernamePattern.test(value)) {
        // feedback good info
        feedback.textContent = 'Valid'
    } else {
        // feedback help info
        feedback.textContent = 'Not valid'
    }
})

// live feedback
form.username.addEventListener('keyup', e => {
    console.log(e);
    // console.log(e.target.value, form.username.value)
    if(usernamePattern.test(e.target.value)) {
        form.username.classList.remove('error');
        form.username.classList.add('success');
    } else {
        form.username.classList.remove('success');
        form.username.classList.add('error')
    }
})


// test RegEx
// const username = 'ldkhanh';
// const pattern = /^[a-z]{6,}$/

// let result = pattern.test(username);

// if(result) {
//     console.log('regex test passed :D')
// } else {
//     console.log('regex test failed :D')
// }

// let result = username.search(pattern);
// search return position qualitifier
// fail -> return -1 

// console.log(result);

