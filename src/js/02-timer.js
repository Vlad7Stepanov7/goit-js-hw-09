import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
 button: document.querySelector(`[data-start]`),
 daysEl: document.querySelector(`[data-days]`),
 hoursEl: document.querySelector(`[data-hours]`),
 minutesEl: document.querySelector(`[data-minutes]`),
 secondsEl: document.querySelector(`[data-seconds]`),
}

const currentDate = Date.now();
let intervalId = null;
let chosenDate = null;
let timeOfTimer = null;

refs.button.setAttribute(`disabled`, ``);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

    chosenDate = selectedDates[0];
 
    if (currentDate > chosenDate) {
      Notify.failure("Please choose a date in the future");

      refs.button.setAttribute(`disabled`, ``);
      return;
    }

    refs.button.removeAttribute(`disabled`, ``);
  },
};

 flatpickr(`#datetime-picker`, options);

refs.button.addEventListener(`click`, onButtonClick);

function onButtonClick(e) {
  intervalId = setInterval(() => {
    timeOfTimer = chosenDate - new Date();
    
    displayTimeOnScreen(convertMs(timeOfTimer));

    if (Number(timeOfTimer) <= 1000) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};


function displayTimeOnScreen({ days, hours, minutes, seconds }) {
   refs.daysEl.textContent = addLeadingZero(days);
refs.hoursEl.textContent = addLeadingZero(hours);
refs.minutesEl.textContent = addLeadingZero(minutes);
refs.secondsEl.textContent = addLeadingZero(seconds);
};

function addLeadingZero(value) {
  return String(value).padStart(2, `0`);
};


