// adding new chats documents
// setting up a realtime listener to get new chats
// updating username
// updating the room

class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }
    async addChat(message) {
        const now = new Date();
        const chat = {
            message,
            username : this.username,
            room : this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        // save the chat document
        const response = await this.chats.add(chat);
        return response;
    }
    // realtime => not async
    getChats (callback) {
        this.unsub = this.chats
        // complex query
        .where('room', '==', this.room )
        // created index in firestore
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                const doc = change.doc;
                // console.log(doc.data());
                if(change.type === "added") {
                    // update UI
                    callback(doc.data())
                }
            })
        })
    }

    updateName(username) {
        this.username = username;
        localStorage.setItem('username', username);
    }
    updateRoom(room) {
        this.room = room;
        if(this.unsub) {
            // stop listen change state of old room 
            // change state of old room to new room
            this.unsub();
        }
    }
}

// const chatroom = new Chatroom('gaming', 'ld');
// console.log(chatroom);

// chatroom.addChat('hello everyone')
//     .then(() => console.log('chat added'))
//     .catch(() => console.log('Failed '))

// chatroom.getChats((data) => {
//     console.log(data)
// })

// setTimeout( () => {
//     chatroom.updateRoom('general');
//     chatroom.updateName('ld');
//     chatroom.getChats((data) => {
//         console.log(data)
//     })  
// }
// ,1000)

// chatroom.addChat('hello everyone')
//     .then(() => console.log('chat added'))
//     .catch(() => console.log('Failed '))
