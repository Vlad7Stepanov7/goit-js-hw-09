const refs = {
  form: document.querySelector(`.form`),
  button: document.querySelector(`button`),
  inputDelay: document.querySelector(`.input-delay`),
  inputStep: document.querySelector(`input-step`),
  inputAmount: document.querySelector(`.input-amount`),
};

let delay = refs.inputDelay.value;  
let step = 0;
const amount = refs.inputAmount.value;


// refs.button.addEventListener(`click`, onButtonClick);

// function onButtonClick(e) {
//   console.log(amount);
//   console.log(delay);

//   step = refs.inputStep.value;
// }

refs.form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(e) {
  step = refs.inputStep.value;
  
  for (let i = 1; i < amount; i += 1) {

    if (i === 1) {
      createPromise(i, delay); 
    }

     delay += step;
    createPromise(i, delay)
      .then(({ position, delay }) => console.log(`✅ Fulfilled promise ${position} in ${delay}ms`))
      .catch(({position, delay}) => console.log(`❌ Rejected promise ${position} in ${delay}ms`));
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