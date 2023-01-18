const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyRef = document.body;

let intervalId = null;
console.log('Hello');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
    btnStartEl.disabled = true;
    btnStopEl.disabled = false;
    intervalId = setInterval(() => {
        bodyRef.style.backgroundColor = getRandomHexColor();
        
    }, 1000)
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    btnStartEl.disabled = false;
    btnStopEl.disabled = true;

    Notiflix.Notify.info('Great choice!');
})

