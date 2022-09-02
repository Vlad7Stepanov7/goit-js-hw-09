import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

const refs = {
  form: document.querySelector(`.form`),
  button: document.querySelector(`button`),
  inputDelay: document.querySelector(`.input-delay`),
  inputStep: document.querySelector(`.input-step`),
  inputAmount: document.querySelector(`.input-amount`),
};



refs.form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
   
  for (let i = 1; i <= refs.inputAmount.value; i += 1) {  
    if (i === 1) { 
      promise(i);

    } else {
      refs.inputDelay.value = Number.parseInt(refs.inputDelay.value) + Number.parseInt(refs.inputStep.value);

      promise(i);
    }
  };
};

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
     if (shouldResolve) {
     resolve({position, delay})
    }
      reject({position, delay})
    }, delay);
  });
};

function promise(index) {

 createPromise(index, refs.inputDelay.value)
      .then(({ position, delay }) => Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
      .catch(({ position, delay }) =>Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
};