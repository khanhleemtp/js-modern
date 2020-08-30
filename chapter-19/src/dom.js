const body = document.querySelector('body');

const styleBody = () => {
    body.style.background = 'peachpuff';
}

const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
}

console.log('dom file')

export const contact = 'ld@gmail.com';

export { styleBody, addTitle };  