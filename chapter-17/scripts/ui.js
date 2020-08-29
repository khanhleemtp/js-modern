// render chat template to the DOM
// clear the list of chats (when the room changes)

class ChatUI {
    constructor(list) {
        this.list = list;
    }
    clear() {
        // clear last chat ui
        this.list.innerHTML = '';
    }
    render(data) {
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(), 
            // add little words into the end
            { addSuffix: true }
        )
        const html = `
        <li class="border-2 border-gray-200 p-4 rounded-md mb-2 text-left">
            <span class="font-bold text-lg">${data.username}: </span>
            <span>${data.message}</span>
            <div class="text-xs">${when}</div>
        </li>
        `
        this.list.innerHTML += html;
    }

}