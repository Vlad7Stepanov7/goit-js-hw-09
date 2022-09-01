const btnStart = document.querySelector(`[data-start]`);
const btnStop = document.querySelector(`[data-stop]`);
const body = document.body;

let isActive = false;
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

onBtnStopClick();

btnStart.addEventListener(`click`, onBtnStartClick);
btnStop.addEventListener(`click`, onBtnStopClick);

function onBtnStartClick(e) { 
    isActive = true;

    btnStart.disabled = isActive;
    btnStop.disabled = !isActive;

    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        console.log(body.style.backgroundColor = getRandomHexColor());
    }, 1000);
    
};

function onBtnStopClick(e) {
    clearInterval(intervalId);

    isActive = false;

    btnStop.disabled = !isActive;
    btnStart.disabled = isActive;
};