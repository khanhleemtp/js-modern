const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')

const generateTemplate = todo => {
    
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <img src="./delete.svg" class="img-trash delete"/>
        </li>
    `;

    list.innerHTML += html;

}

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    // trim remove space
    if(todo.length) {
        generateTemplate(todo);
        // reset previous input 
        addForm.reset();
    }
});

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo) => todo.classList.add('filtered'))
    
    Array.from(list.children)
        .filter((todo )=> todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('filtered'))
};

// keyup event
search.addEventListener('keyup', () => {
    console.log(search.value.trim());
    const term = search.value.trim();
    filterTodos(term);
})