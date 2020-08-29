// dom queries
const list = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');

// check local storage for a name
const username = localStorage.username ? localStorage.username : "Anon";

// class instance
const chatroom = new Chatroom('gaming', username);
const chatUI = new ChatUI(list);


// add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    // id = message
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
            .then(() => newChatForm.reset())
            .catch(err => console.log(err))
});

// update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    // update name via chatroom
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName)
    // reset the form
    newNameForm.reset();
    // show and hide update message
    updateMsg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => {
        updateMsg.innerText = ''
    }, 2000);
})

// update the chat room
rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON') {
        e.target.classList.remove('bg-green-400');
        e.target.classList.add('bg-red-300');
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
        setTimeout(() => {
            e.target.classList.add('bg-green-400');
        }, 1000)
    }
})

// get chats and render
chatroom.getChats((data) => chatUI.render(data));
