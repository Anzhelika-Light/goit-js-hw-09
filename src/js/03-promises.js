import Notiflix from 'notiflix';

// Page elements
const formEl = document.querySelector('.form');
const delayInputEl = document.querySelector('input[name = "delay"]');
const stepInputEl = document.querySelector('input[name = "step"]');
const amountInputEl = document.querySelector('input[name = "amount"]');
const submitBtnEl = document.querySelector('button[type = "submit"]');

// Promise creation
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay}); 
      } else {
        reject({position, delay});
      }
    }, delay);
  });
}

// on Submit
const onSubmit = e => {
  e.preventDefault(); 

  // converting a string to a number const number = +string
  const amount = +amountInputEl.value;
  let delayTime = +delayInputEl.value;
  const stepTime = +stepInputEl.value;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delayTime) 
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  
  delayTime += stepTime;
  }

  formEl.reset();
};

// Event = submit
submitBtnEl.addEventListener('click', onSubmit);