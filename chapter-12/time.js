const inputTime = document.querySelector('.input');
const doc = document.querySelector('.input-time');

const handleSubmit = (sec) => {
    const time = setInterval(() => {
        sec--;
        let h = Math.floor(sec/3600);
        let m = Math.floor((sec%3600)/60);
        let s = Math.floor((sec%3600)%60)
        const html = `
            <span>${h}</span> :
            <span>${m}</span> :
            <span>${s}</span>
        `
        doc.innerHTML = html;
        if(sec === 0) clearInterval(time);
    }, 1000) 
    
}

inputTime.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(parseInt(inputTime.time.value))
    handleSubmit(parseInt(inputTime.time.value));
});


