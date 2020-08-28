const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

// custom properties data-name="" in the tag

const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate();
    let html = `
    <li class="bg-red-200 my-4 p-4 rounded-lg" data-id="${id}">
        <div class="font-bold">${recipe.title}</div>
        <div>${time}</div>
        <button class="bg-red-500 px-4 rounded-full text-gray-200">Deltete</button>
    </li>
    `
    list.innerHTML += html;
}

const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id) {
            recipe.remove();
        }
    })
}

// get document

// db.collection('recipes').get().then((snapshot) => {
//     // when we have the data
//     snapshot.docs.forEach(doc => {
//         // console.log(doc.id);
//         // console.log(doc.data().created_at.toDate())
//         addRecipe(doc.data(), doc.id);
//     })
// }).catch((err) => {
//     console.log(err);
// })

// get data realtime

const unsub = db.collection('recipes').onSnapshot(snapshot => {
    // console.log(snapshot.docChanges());
    // everytime the collection change anyway
    // firestore takes a snapshoot of that collecion
    // and the snapshoot represents the state of that collecion
    // _proto
    // docChanges : document change in db
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        // console.log(doc.data())
        if(change.type === 'added') {
            addRecipe(doc.data(), doc.id)
        }
        else if(change.type === 'removed') {
            deleteRecipe(doc.id);
        }
    })
})


// add document

form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now),
        author: 'LD Khánh'
    }

    db.collection('recipes').add(recipe).then((() => {
        console.log('recipe added')
    })).catch(err => console.log(err));
    form.recipe.value = ''; 
})

list.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        // console.log(id)
        db.collection('recipes').doc(id).delete().then(() => {
            console.log('recipes deleted')
        })
    }
})

// unsub
button.addEventListener('click', () => {
    unsub();
    console.log('Unsubcribe from collecion changes')
})